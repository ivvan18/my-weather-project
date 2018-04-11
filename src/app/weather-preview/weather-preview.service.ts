import { Injectable } from '@angular/core';
import {city_ids} from '../models/default-weather';
import {HttpClient} from '@angular/common/http';
import {IWeatherRegion} from '../models/i-weather-region';

@Injectable()
export class WeatherPreviewService {
  weather: IWeatherRegion;

  private weatherApiUrl: string = `http://api.openweathermap.org/data/2.5/weather?` +
    `id=&units=metric&APPID=54381dfe25730288c7afd5e7a8bb0489`;

  getWeather(request: IWeatherRegion) {
    console.log('getWeather: service');
    this.weather = request;
    this.weatherApiUrl = this.weatherApiUrl.substr(0, 50) +
      city_ids[this.weather.region] + this.weatherApiUrl.substr(this.weatherApiUrl.search(/&units/));
    return this.http.get(this.weatherApiUrl);
  }

  constructor( private http: HttpClient) { }

}
