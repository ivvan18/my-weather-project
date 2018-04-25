import { Injectable } from '@angular/core';
import {IWeatherRegion} from '../models/i-weather-region';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

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

  getForecast(region: IWeatherRegion, days: number): Observable<Object> {
    return this.sendRequest(region, days);
  }

  constructor(private http: HttpClient) { }
}
