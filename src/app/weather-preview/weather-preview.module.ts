import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherPreviewComponent} from './weather-preview.component';
import {WeatherPreviewService} from './weather-preview.service';
import {DegreesModule} from '../degrees/degrees.module';
import {PreviewSearchModule} from '../preview-search/preview-search.module';
import {HttpClientModule} from '@angular/common/http';
import {MapModalModule} from '../map-modal/map-modal.module';

@NgModule({
  imports: [
    CommonModule,
    DegreesModule,
    PreviewSearchModule,
    HttpClientModule,
    MapModalModule
  ],
  declarations: [WeatherPreviewComponent],
  exports: [WeatherPreviewComponent],
  providers: [WeatherPreviewService]
})
export class WeatherPreviewModule { }
