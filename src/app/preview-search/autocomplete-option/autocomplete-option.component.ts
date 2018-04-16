import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {IWeatherRegion} from '../../models/i-weather-region';

@Component({
  selector: 'app-autocomplete-option',
  templateUrl: './autocomplete-option.component.html',
  styleUrls: ['./autocomplete-option.component.css']
})
export class AutocompleteOptionComponent implements OnInit {
  @Input() option: IWeatherRegion;
  @Output() optionClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onOptionSearch(event) {
    event.stopPropagation();
    this.optionClicked.emit();
  }
}
