import { Injectable } from '@angular/core';
import {IWeatherRegion} from '../models/i-weather-region';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IChartData} from '../models/i-chart-data';

@Injectable()
export class HttpServiceService {
  private weatherForeCastApiUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?' +
    'id=&units=metric&APPID=54381dfe25730288c7afd5e7a8bb0489';

  getIntervalsForForecasts(days: number): number {
    if (days === 1) {
      return 8;
    }
    if (days === 2) {
      return 16;
    }
    if (days === 3) {
      return 24;
    }
    if (days === 4) {
      return 32;
    }
    return 40;
  }

  sendRequest(request: IWeatherRegion, days: number): Observable<Object> {
    this.weatherForeCastApiUrl = this.weatherForeCastApiUrl.substr(0, 51) +
      request.id + this.weatherForeCastApiUrl.substr(this.weatherForeCastApiUrl.search(/&units/));
    return this.http.get(this.weatherForeCastApiUrl + `&cnt=${this.getIntervalsForForecasts(days)}`);
  }

  getForecast(region: IWeatherRegion, days: number): IChartData {
    const chartData: IChartData = {name: '', series: []};
    this.sendRequest(region, days)
      .subscribe(data => {
        chartData.name = `${data['city']['name']}, ${data['city']['country']}`;
        for (let i = 0; i < data['cnt']; i++) {
          const stringData = data['list'][i]['dt_txt'];
          const year = stringData.substr(0, 4);
          const month =  stringData.substr(5, 2);
          const day = stringData.substr(8, 2);
          const hour = stringData.substr(11, 2);
          const minutes = stringData.substr(14, 2);
          const seconds = stringData.substr(17, 2);
          const currentData = new Date(year, month, day, hour, minutes, seconds);
          chartData.series.push({
            name: currentData,
            value: data['list'][i]['main']['temp']
          });
        }
      });
    console.log(chartData);
    return chartData;
  }

  constructor(private http: HttpClient) { }
}
