import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherPreviewComponent} from './weather-preview.component';
import {WeatherPreviewService} from './weather-preview.service';
import {DegreesModule} from '../degrees/degrees.module';

@NgModule({
  imports: [
    CommonModule,
    DegreesModule
  ],
  declarations: [WeatherPreviewComponent],
  exports: [WeatherPreviewComponent],
  providers: [WeatherPreviewService]
})
export class WeatherPreviewModule { }
