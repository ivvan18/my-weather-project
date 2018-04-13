import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPreviewComponent } from './weather-preview/weather-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'wheteo', component: WeatherPreviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/wheteo', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
