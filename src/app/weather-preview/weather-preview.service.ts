import { Injectable } from '@angular/core';
import {IWeatherPreview} from '../models/i-weather-preview';
import {DEFAULT_WEATHER} from '../models/default-weather';

@Injectable()
export class WeatherPreviewService {
  weather: IWeatherPreview;

  getWeather(): IWeatherPreview {
    this.weather = DEFAULT_WEATHER;
    return this.weather;
  }

  constructor() { }

}
