import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherPreviewModule } from './weather-preview/weather-preview.module';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardModule} from './dashboard/dashboard.module';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {firebaseConfig} from '../environments/firebase.config';
import { MapModalComponent } from './map-modal/map-modal.component';
import {MapModalModule} from './map-modal/map-modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherPreviewModule,
    AppRoutingModule,
    DashboardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MapModalModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
