import { Component, OnInit, NgModule, Input } from '@angular/core';
import {IChartData} from '../models/i-chart-data';

@Component({
  selector: 'app-chart-section',
  templateUrl: './chart-section.component.html',
  styleUrls: ['./chart-section.component.scss']
})
export class ChartSectionComponent implements OnInit {
  @Input() results: IChartData[];
  @Input() currentRegionsOnChart: number;
  // options
  xAxisLabel = 'Local time';
  yAxisLabel = 'Temperature, \u2103';

  colorScheme = {
    domain: ['#A8385D', '#AAE3F5', '#7AA3E5', '#A27EA8']
  };

  onSelect(event) {
    console.log(this.results);
    this.updateData();
  }

  updateData() {
    this.results = [...this.results];
  }
  constructor() {}

  ngOnInit() {
  }

}
