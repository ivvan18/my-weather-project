import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {PreviewSearchService} from '../../preview-search/preview-search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IWeatherRegion} from '../../models/i-weather-region';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css',
    '../../../../node_modules/flag-icon-css/css/flag-icon.css'
  ]
})
export class AddRegionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private prevSearch: PreviewSearchService,
              private el: ElementRef) { }

  searchForm: FormGroup;
  @Output() searchRegion = new EventEmitter<IWeatherRegion>();
  autocompleteOptions: IWeatherRegion[] = [];
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
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
        }
      );
  }

}
