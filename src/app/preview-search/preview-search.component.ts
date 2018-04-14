import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IWeatherRegion} from '../models/i-weather-region';
import 'rxjs/add/operator/filter';



@Component({
  selector: 'app-preview-search',
  templateUrl: './preview-search.component.html',
  styleUrls: ['./preview-search.component.css']
})
export class PreviewSearchComponent implements OnInit {
  @Output() searchRegion = new EventEmitter<IWeatherRegion>();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      region : ['', Validators.required]
    });

    this.form.valueChanges
      .subscribe(() => {
        console.log(this.form.value.region);
      });
  }

  onOptionClicked(event) {
    console.log('On Option Clicked!');
    const region: IWeatherRegion = {
      region: event.target.textContent
    };

    this.searchRegion.emit(region);
  }

  onSubmit() {
    console.log('Clicked!');
    if (this.form.invalid) {
      return;
    }

    console.log('Clicked!');
    const region: IWeatherRegion = this.form.value;

    this.searchRegion.emit(region);
    this.form.reset();
  }

}
