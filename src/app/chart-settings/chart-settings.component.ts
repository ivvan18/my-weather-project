import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {IWeatherRegion} from '../models/i-weather-region';

@Component({
  selector: 'app-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.css']
})
export class ChartSettingsComponent implements OnInit {
  constructor() { }
  isAddRegionOpen = false;
  @Output() selectChange = new EventEmitter();
  @Output() addRegion = new EventEmitter();
  @Input() currentRegionsOnChart;

  ngOnInit() {
  }

  toggleAdd() {
    this.isAddRegionOpen = !this.isAddRegionOpen;
    console.log('toggled!');
    console.log(this.isAddRegionOpen);
  }

  onSelectChanged(event) {
    event.stopPropagation();
    this.selectChange.emit(event.target.value);
  }
}
