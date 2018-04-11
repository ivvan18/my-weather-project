import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewSearchComponent} from './preview-search.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PreviewSearchComponent],
  exports: [PreviewSearchComponent]
})
export class PreviewSearchModule { }
