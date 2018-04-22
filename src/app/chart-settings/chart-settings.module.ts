import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartSettingsComponent} from './chart-settings.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { DeleteRegionComponent } from './delete-region/delete-region.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartSettingsComponent, AddRegionComponent, DeleteRegionComponent],
  exports: [ChartSettingsComponent, AddRegionComponent, DeleteRegionComponent]
})
export class ChartSettingsModule { }
