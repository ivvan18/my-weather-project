import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherPreviewComponent } from './weather-preview/weather-preview.component';
import {WeatherPreviewModule} from './weather-preview/weather-preview.module';
import { DegreesPipe } from './degrees/degrees.pipe';
import {DegreesModule} from './degrees/degrees.module';
import { PreviewSearchComponent } from './preview-search/preview-search.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WeatherPreviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
