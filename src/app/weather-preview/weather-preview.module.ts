import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherPreviewComponent} from './weather-preview.component';
import {WeatherPreviewService} from './weather-preview.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherPreviewComponent],
  exports: [WeatherPreviewComponent],
  providers: [WeatherPreviewService]
})
export class WeatherPreviewModule { }
