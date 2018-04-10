import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DegreesPipe} from './degrees.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DegreesPipe],
  exports: [DegreesPipe]
})
export class DegreesModule { }
