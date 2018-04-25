import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapModalComponent} from './map-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxXI3tHOg2kWzmA2iMNkxfR_JNzLkB_1g'
    })
  ],
  declarations: [MapModalComponent],
  exports: [MapModalComponent, ModalModule]
})
export class MapModalModule { }
