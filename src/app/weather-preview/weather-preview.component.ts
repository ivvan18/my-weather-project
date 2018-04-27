import {Component, OnInit} from '@angular/core';
import {IWeatherPreview} from '../models/i-weather-preview';
import {WeatherPreviewService} from './weather-preview.service';
import {IWeatherRegion} from '../models/i-weather-region';
import {DomSanitizer} from '@angular/platform-browser';

import {tz} from 'moment-timezone';
import timezone = require('tz-lookup');

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.css']
})
export class WeatherPreviewComponent implements OnInit {
  weather: IWeatherPreview;

  constructor(private weatherPreviewService: WeatherPreviewService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.weather = this.weatherPreviewService.weather;
    this.weatherPreviewService.getDefaultWeather()
      .subscribe((data)  => this.getData(data));
  }

  onSearchClick(request: IWeatherRegion) {
    this.weatherPreviewService.getWeather(request)
      .subscribe(data  => this.getData(data));
  }

  getData(data: object) {
    this.weather.region = data['name'];
    this.weather.description = data['weather'][0]['description'];
    const timeZ: string = timezone(data['coord']['lat'], data['coord']['lon']);
    this.weather.lon = data['coord']['lon'];
    this.weather.lat = data['coord']['lat'];
    this.weather.country = data['sys']['country'];
    console.log(timeZ);
    this.weather.time = tz(data['dt'] * 1000, timeZ).format('HH:mm');
    this.weather.temperature = data['main']['temp'];
    let description: string = data['weather'][0]['description'];
    description += data['weather'][0]['icon'].substr(data['weather'][0]['icon'].length - 1) === 'd' ? '_d' : '_n';
    const path: string = this.weatherPreviewService.getImageOfWeather(description, data['weather'][0]['id']);
    this.weather.image_path = this.sanitizer.bypassSecurityTrustResourceUrl(path);
    this.weatherPreviewService.weather = this.weather;
  }
}


