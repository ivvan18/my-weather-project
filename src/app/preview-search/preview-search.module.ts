import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewSearchComponent} from './preview-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PreviewSearchService} from './preview-search.service';
import { AngularFireModule } from 'angularfire2';
import {firebaseConfig} from '../../environments/firebase.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [PreviewSearchComponent],
  exports: [PreviewSearchComponent],
  providers: [PreviewSearchService]

})
export class PreviewSearchModule { }
