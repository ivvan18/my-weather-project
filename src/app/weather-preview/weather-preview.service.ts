import { Injectable } from '@angular/core';
import {city_ids} from '../models/default-weather';
import {HttpClient} from '@angular/common/http';
import {IWeatherRegion} from '../models/i-weather-region';
import {imgMap} from '../models/default-weather';
import {IWeatherPreview} from '../models/i-weather-preview';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';
import {tz} from 'moment-timezone';

import timezone = require('tz-lookup');



@Injectable()
export class WeatherPreviewService {
  weatherRegion: IWeatherRegion;
  weather: IWeatherPreview = {
    region: 'Bangladesh',
    temperature: 19,
    time: '20:23',
    description: 'few clouds',
    image_path: this.sanitizer.bypassSecurityTrustResourceUrl('https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_n.svg')
  };

  private weatherApiUrl: string = 'http://api.openweathermap.org/data/2.5/weather?' +
    'id=&units=metric&APPID=54381dfe25730288c7afd5e7a8bb0489';

  sendRequest(request: IWeatherRegion): Observable<Object> {
    console.log('getWeather: service');
    this.weatherRegion = request;
    this.weatherApiUrl = this.weatherApiUrl.substr(0, 50) +
      city_ids[this.weatherRegion.region] + this.weatherApiUrl.substr(this.weatherApiUrl.search(/&units/));
    return this.http.get(this.weatherApiUrl);
  }

  getWeather(request: IWeatherRegion) {
    this.sendRequest(request)
      .subscribe(data  => {
        this.weather.region = data['name'];
        this.weather.description = data['weather'][0]['description'];
        const timeZ: string = timezone(data['coord']['lat'], data['coord']['lon']);
        console.log(timeZ);
        this.weather.time = tz(data['dt'] * 1000, timeZ).format('HH:mm');
        this.weather.temperature = data['main']['temp'];
        let description: string = data['weather'][0]['description'];
        description += data['weather'][0]['icon'].substr(data['weather'][0]['icon'].length - 1) === 'd' ? '_d' : '_n';
        const path: string = this.getImageOfWeather(description, data['weather'][0]['id']);
        this.weather.image_path = this.sanitizer.bypassSecurityTrustResourceUrl(path);
      });
  }


  getImageOfWeather(description: string, id: number): string {
    const timesOfDay: string = description.substr(description.length - 1);
     // Thunderstorm
    if (200 <= id && id <= 232) {
      return imgMap['thunderstorm_d'];
    }

     // Atmosphere
    if (700 <= id && id <= 781) {
      return imgMap['mist_' + timesOfDay];
    }

     // Clear and Clouds
    if (800 <= id && id <= 804)  {
      return imgMap[description];
    }

     // Drizzle
    if (300 <= id && id <= 321) {
      if (id === 300 || id === 310) {
        return imgMap['light drizzle_d'];
      }

      if (id === 301 || id === 311) {
        return imgMap['drizzle_d'];
      }

      return imgMap['heavy drizzle_d'];
    }

     // Rain
    if (500 <= id && id <= 531) {
      if (id === 500) {
        return imgMap['light rain_' + timesOfDay];
      }

      if (id === 501) {
        return imgMap['rain_' + timesOfDay];
      }

      if (502 <= id && id <= 504) {
        return imgMap['shower rain_' + timesOfDay];
      }

      return imgMap['heavy drizzle_d'];
    }

     // Snow
    if (600 <= id && id <= 622) {
      if (id === 600 || id === 615) {
        return imgMap['light snow_d'];
      }

      if (id === 601 || id === 611 || id === 616) {
        return imgMap['snow_d'];
      }

      if (id === 621 || id === 622)  {
        return imgMap['blizzard'];
      }

      return imgMap['heavy snow_d'];
    }

     // Default weather image
    return imgMap['overcast clouds_d'];
  }

  constructor( private http: HttpClient,
               private sanitizer: DomSanitizer) { }

}
