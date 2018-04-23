import { Injectable } from '@angular/core';
import {IWeatherRegion} from '../models/i-weather-region';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IChartData} from '../models/i-chart-data';
import timezone = require('tz-lookup');
import moment = require ('moment');

@Injectable()
export class HttpServiceService {
  private weatherForeCastApiUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?' +
    'id=&units=metric&APPID=54381dfe25730288c7afd5e7a8bb0489';

  getIntervalsForForecasts(days: number): number {
    return days * 8;
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
          // console.log(tz(stringData, timezone(data['city']['coord']['lat'], data['city']['coord']['lon'])).format());
          // const year = stringData.substr(0, 4);
          // const month =  stringData.substr(5, 2);
          // const day = stringData.substr(8, 2);
          // const hour = stringData.substr(11, 2);
          // const minutes = stringData.substr(14, 2);
          // const seconds = stringData.substr(17, 2);
          // const currentData = new Date(year, month, day, hour, minutes, seconds);
          const utcDate = moment.utc(stringData);
          const localDate = utcDate.clone().tz(timezone(data['city']['coord']['lat'], data['city']['coord']['lon']));
          console.log(localDate.format('YYYY-MM-DD HH:mm:ss'));
          chartData.series.push({
            name: new Date(localDate.format('YYYY-MM-DD HH:mm:ss')),
            value: data['list'][i]['main']['temp']
          });
        }
      });
    console.log(chartData);
    return chartData;
  }

  constructor(private http: HttpClient) { }
}
