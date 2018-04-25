import { Injectable } from '@angular/core';
import {IChartData} from '../models/i-chart-data';
import {HttpServiceService} from './http-service.service';
import {IWeatherRegion} from '../models/i-weather-region';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardService {
  currentRegionsOnChart = 0;
  daysToDisplay = 2;
  data: IChartData[] = [];

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
