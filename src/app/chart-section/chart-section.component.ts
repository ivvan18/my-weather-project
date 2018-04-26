import { Component, OnInit, Input } from '@angular/core';
import {IChartData} from '../models/i-chart-data';
import {SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-chart-section',
  templateUrl: './chart-section.component.html',
  styleUrls: ['./chart-section.component.scss']
})
export class ChartSectionComponent implements OnInit {
  @Input() results: IChartData[];
  @Input() currentRegionsOnChart: number;
  @Input() previewResults: Object;
  // options
  xAxisLabel = 'Local time';
  yAxisLabel = 'Temperature, \u2103';

  colorScheme = {
    domain: ['#A8385D', '#AAE3F5', '#7AA3E5', '#A27EA8']
  };

  updateData() {
    this.results = [...this.results];
  }

  constructor() {}

  ngOnInit() {
  }

}
