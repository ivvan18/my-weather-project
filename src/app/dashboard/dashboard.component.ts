import { Component, OnInit, ViewChild } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {IChartData} from '../models/i-chart-data';
import {IWeatherRegion} from '../models/i-weather-region';
import {HttpServiceService} from './http-service.service';
import {ChartSectionComponent} from '../chart-section/chart-section.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private http: HttpServiceService) { }

  currentRegionsOnChart = 0;
  daysToDisplay = 2;
  data: IChartData[] = [];
  @ViewChild(ChartSectionComponent) child: ChartSectionComponent;

  setDaysToDisplay(value: number) {
    this.dashboardService.setDaysToDisplay(value);
    this.daysToDisplay = this.dashboardService.daysToDisplay;
  }

  appendChartData(region: IWeatherRegion) {
    this.dashboardService.appendChartData(region);
    this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
    this.data = [...this.dashboardService.data];
    console.log(this.data);
    const newChild = this.child;
    setTimeout(function (this) {
      newChild.updateData();
    }, 500);
  }

  deleteChartData(name: string) {
    this.dashboardService.deleteChartData(name);
    this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
    this.data = this.dashboardService.data;
  }

  deleteAllChartData() {
    this.dashboardService.deleteAllChartData();
    this.currentRegionsOnChart = this.dashboardService.currentRegionsOnChart;
    this.data = this.dashboardService.data;
  }

  ngOnInit() {
  }

}
