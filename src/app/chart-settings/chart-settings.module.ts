import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartSettingsComponent} from './chart-settings.component';
import { AddRegionComponent } from './add-region/add-region.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartSettingsComponent, AddRegionComponent],
  exports: [ChartSettingsComponent, AddRegionComponent]
})
export class ChartSettingsModule { }
