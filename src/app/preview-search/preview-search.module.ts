import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewSearchComponent} from './preview-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreviewSearchComponent],
  exports: [PreviewSearchComponent]
})
export class PreviewSearchModule { }
