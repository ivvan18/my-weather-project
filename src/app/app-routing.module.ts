import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPreviewComponent } from './weather-preview/weather-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: 'wheteo', component: WeatherPreviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/wheteo', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
