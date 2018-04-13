import {SafeResourceUrl} from '@angular/platform-browser';

export interface IWeatherPreview {
  temperature: number;
  description: string;
  time: string;
  region: string;
  image_path: SafeResourceUrl;
}
