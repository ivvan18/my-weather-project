import { Injectable } from '@angular/core';
import {IChartData, IChartEntry} from '../models/i-chart-data';
import {HttpServiceService} from './http-service.service';
import {IWeatherRegion} from '../models/i-weather-region';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';


@Injectable()
export class DashboardService {
  currentRegionsOnChart = 0;
  daysToDisplay = 2;
  data: IChartData[] = [];
  previewResults: Object = {};

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
    this.daysToDisplay = value;
  }

  appendChartData(region: IWeatherRegion): Observable<Object> {
    this.currentRegionsOnChart++;
    return this.http.getForecast(region, this.daysToDisplay);
  }

  deleteChartData(index: number) {
    this.currentRegionsOnChart--;
    this.data.splice(index, 1);
  }

  deleteAllChartData() {
    this.currentRegionsOnChart = 0;
    this.data.splice(0);
  }

  constructor(private http: HttpServiceService) { }
}
