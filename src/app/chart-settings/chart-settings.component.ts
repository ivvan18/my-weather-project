import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {IWeatherRegion} from '../models/i-weather-region';
import {IChartData} from '../models/i-chart-data';

@Component({
  selector: 'app-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.css']
})
export class ChartSettingsComponent implements OnInit {
  constructor() { }
  isAddRegionOpen = false;
  isDeleteRegionOpen = false;
  @Output() selectChange = new EventEmitter();
  @Output() addRegion = new EventEmitter();
  @Output() deleteRegion = new EventEmitter();
  @Output() deleteAllRegions = new EventEmitter();

  @Input() daysToDisplay: number;
  @Input() currentRegionsOnChart;
  @Input() optionsToDelete: IChartData[];

  ngOnInit() {
  }

  toggleAdd() {
    this.isAddRegionOpen = !this.isAddRegionOpen;
  }

  toggleDelete() {
    this.isDeleteRegionOpen = !this.isDeleteRegionOpen;
  }

  onSelectChanged(event) {
    event.stopPropagation();
    this.selectChange.emit(event.target.value);
  }
}
