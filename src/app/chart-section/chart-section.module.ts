import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartSectionComponent} from './chart-section.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ChartSectionComponent],
  exports: [ChartSectionComponent]
})
export class ChartSectionModule { }
