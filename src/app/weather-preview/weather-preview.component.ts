import { Component, OnInit } from '@angular/core';
import {IWeatherPreview} from '../models/i-weather-preview';
import {WeatherPreviewService} from './weather-preview.service';
import {IWeatherRegion} from '../models/i-weather-region';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.css']
})
export class WeatherPreviewComponent implements OnInit {
  weather: IWeatherPreview = {
    region: 'Bangladesh',
    temperature: 19,
    time: '20:23',
    description: 'clear sky',
    image_path: this.sanitizer.bypassSecurityTrustResourceUrl('https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_n.svg')
  };

  constructor(private weatherPreviewService: WeatherPreviewService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  onSearchClick(request: IWeatherRegion) {
    this.weatherPreviewService.getWeather(request);
    this.weather = this.weatherPreviewService.weather;
  }

}
