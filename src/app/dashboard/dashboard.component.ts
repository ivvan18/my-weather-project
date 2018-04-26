import { Component, OnInit, ViewChild } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {IChartData, IChartEntry} from '../models/i-chart-data';
import {IWeatherRegion} from '../models/i-weather-region';
import {ChartSectionComponent} from '../chart-section/chart-section.component';
import {WeatherPreviewService} from '../weather-preview/weather-preview.service';
import {DomSanitizer} from '@angular/platform-browser';

import timezone = require('tz-lookup');
import moment = require ('moment');


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private weatherPreviewService: WeatherPreviewService,
              private sanitizer: DomSanitizer) { }

  currentRegionsOnChart = 0;
  daysToDisplay = 2;
  data: IChartData[] = [];
  previewResults: Object = {};
  @ViewChild(ChartSectionComponent) child: ChartSectionComponent;

  clearPreviewResults() {
    for (const prop in this.previewResults) {
      if (this.previewResults.hasOwnProperty(prop)) {
        delete this.previewResults[prop];
      }
    }
  }
  updatePreviewResults() {
    this.clearPreviewResults();
    for (let i = 0; i < this.data.length; ++i) {
      this.previewResults[this.data[i].name] = {};
      for (let j = 0; j < this.data[i].series.length; ++j) {
        const currentEntry: IChartEntry = this.data[i].series[j];
        const date: string = moment(currentEntry.name).format('DD/MM/YYYY HH:mm');
        this.previewResults[this.data[i].name][currentEntry.value] = [currentEntry.description, currentEntry.image_path, date];
      }
    }
  }

  setDaysToDisplay(value: number) {
    this.dashboardService.setDaysToDisplay(value);
    this.daysToDisplay = this.dashboardService.daysToDisplay;
  }

  appendChartData(region: IWeatherRegion) {
    // checking for duplicate appending
    for (let i = 0; i < this.data.length; i++) {
      if (region.region === this.data[i].name) {
        return;
      }
    }

    const chartData: IChartData = {name: '', series: []};
    this.dashboardService.appendChartData(region)
      .subscribe(data => {
        chartData.name = `${data['city']['name']}, ${data['city']['country']}`;
        for (let i = 0; i < data['cnt']; i++) {
          const stringData = data['list'][i]['dt_txt'];
          const utcDate = moment.utc(stringData);

          const localDate = utcDate.clone().tz(timezone(data['city']['coord']['lat'], data['city']['coord']['lon']));
          console.log(localDate.format('YYYY-MM-DD HH:mm:ss'));

          let description: string = data['list'][i]['weather'][0]['description'];
          const ic = data['list'][i]['weather'][0]['icon'];
          description += ic.substr(data['list'][i]['weather'][0]['icon'].length - 1) === 'd' ? '_d' : '_n';
          const path: string = this.weatherPreviewService.getImageOfWeather(description, data['list'][i]['weather'][0]['id']);

          chartData.series.push({
            name: new Date(localDate.format('YYYY-MM-DD HH:mm:ss')),
            value: data['list'][i]['main']['temp'],
            description: data['list'][i]['weather'][0]['description'],
            image_path: this.sanitizer.bypassSecurityTrustResourceUrl(path)
          });
        }
        this.data = [...this.data, chartData];
        this.child.updateData();
        this.updatePreviewResults();
        console.log(this.previewResults);
        this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
        this.dashboardService.data = this.data;
    });
  }

  deleteChartData(index: number) {
    this.dashboardService.deleteChartData(index);
    this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
    this.data = [...this.dashboardService.data];
  }

  deleteAllChartData() {
    this.dashboardService.deleteAllChartData();
    this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
    this.data = [...this.dashboardService.data];
  }

  ngOnInit() {
  }

}
