import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherPreviewComponent } from './weather-preview/weather-preview.component';
import {WeatherPreviewModule} from './weather-preview/weather-preview.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WeatherPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
