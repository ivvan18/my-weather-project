import {Component, OnInit, EventEmitter, Output, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IWeatherRegion} from '../models/i-weather-region';
import 'rxjs/add/operator/filter';
import {PreviewSearchService} from './preview-search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-preview-search',
  templateUrl: './preview-search.component.html',
  styleUrls: ['./preview-search.component.css']
})
export class PreviewSearchComponent implements OnInit {
  @Output() searchRegion = new EventEmitter<IWeatherRegion>();
  autocompleteOptions: IWeatherRegion[] = [];

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private prevSearch: PreviewSearchService,
              private el: ElementRef) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      region : ['', Validators.required]
    });

    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      // .filter((text: string) => text.length > 1)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
        data => {
          this.autocompleteOptions = this.prevSearch.search(data);
          },
        (err: any) => {
          console.log(err);
          });
  }

  onOptionClicked(option) {
    this.autocompleteOptions.splice(0);
    this.form.reset();
    this.searchRegion.emit(option);
  }

  onSubmit() {
    console.log('Clicked!');
    // console.log(this.form.value.region);
    if (this.form.invalid) {
      return;
    }

    console.log('Clicked!');
    const region: IWeatherRegion = this.form.value;

    // this.searchRegion.emit(region);
    this.form.reset();
  }

}
