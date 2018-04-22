import { Injectable } from '@angular/core';
import {IChartData} from '../models/i-chart-data';
import {HttpServiceService} from './http-service.service';
import {IWeatherRegion} from '../models/i-weather-region';

@Injectable()
export class DashboardService {
  currentRegionsOnChart = 0;
  daysToDisplay = 2;
  data: IChartData[] = [];

  setDaysToDisplay(value: number) {
    this.daysToDisplay = value;
  }

  appendChartData(region: IWeatherRegion) {
    this.currentRegionsOnChart++;
    this.data = [...this.data, this.http.getForecast(region, this.daysToDisplay)];
  }

  deleteChartData(name: string) {
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].name === name) {
        this.currentRegionsOnChart--;
        this.data.splice(i, 1);
        return;
      }
    }
  }

  deleteAllChartData() {
    this.currentRegionsOnChart = 0;
    this.data.splice(0);
  }

  constructor(private http: HttpServiceService) { }
}
