import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ChartSettingsModule} from '../chart-settings/chart-settings.module';
import {ChartSectionModule} from '../chart-section/chart-section.module';
import {DashboardService} from './dashboard.service';
import {HttpServiceService} from './http-service.service';

@NgModule({
  imports: [
    CommonModule,
    ChartSettingsModule,
    ChartSectionModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [DashboardService, HttpServiceService]
})
export class DashboardModule { }
