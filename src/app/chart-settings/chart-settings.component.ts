import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.css']
})
export class ChartSettingsComponent implements OnInit {

  constructor() { }
  isAddRegionOpen = false;
  daysToDisplay = 1;


  ngOnInit() {
  }

  toggleAdd() {
    this.isAddRegionOpen = !this.isAddRegionOpen;
  }
}
