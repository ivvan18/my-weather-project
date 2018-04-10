import { Component, OnInit } from '@angular/core';
import {IWeatherPreview} from '../models/i-weather-preview';
import {WeatherPreviewService} from './weather-preview.service';

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.css']
})
export class WeatherPreviewComponent implements OnInit {

  weather: IWeatherPreview;
  constructor(private weatherPreviewService: WeatherPreviewService) { }

  ngOnInit() {
    this.weather = this.weatherPreviewService.getWeather();
  }

}
