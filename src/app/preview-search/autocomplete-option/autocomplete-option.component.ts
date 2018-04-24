import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {IWeatherRegion} from '../../models/i-weather-region';

@Component({
  selector: 'app-autocomplete-option',
  templateUrl: './autocomplete-option.component.html',
  styleUrls: ['./autocomplete-option.component.css',
  '../../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class AutocompleteOptionComponent implements OnInit {
  @Input() option: IWeatherRegion;
  @Output() optionClicked = new EventEmitter();
  @Input() countryCode: string;
  constructor() { }

  ngOnInit() {
  }

  onOptionSearch(event) {
    console.log(this.countryCode);
    this.optionClicked.emit(this.option);
  }
}
