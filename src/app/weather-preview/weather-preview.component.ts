import { Component, OnInit } from '@angular/core';
import {IWeatherPreview} from '../models/i-weather-preview';
import {WeatherPreviewService} from './weather-preview.service';
import {IWeatherRegion} from '../models/i-weather-region';
import {DEFAULT_WEATHER} from '../models/default-weather';

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.css']
})
export class WeatherPreviewComponent implements OnInit {
  weather: IWeatherPreview = DEFAULT_WEATHER;

  constructor(private weatherPreviewService: WeatherPreviewService) { }

  ngOnInit() {
  }

  onSearchClick(request: IWeatherRegion) {
    this.weatherPreviewService.getWeather(request)
      .subscribe(data  => {
        this.weather.region = data['name'];
        this.weather.description = data['weather'][0]['description'];
        const date = new Date();
        this.weather.time = `${date.getHours()}:${date.getMinutes()}`;
        this.weather.temperature = data['main']['temp'];
        this.weather.image_path = '../../assets/weather_icons/bkn_n.svg';
      });
  }

}
