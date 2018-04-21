import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ChartSettingsModule} from '../chart-settings/chart-settings.module';

@NgModule({
  imports: [
    CommonModule,
    ChartSettingsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
