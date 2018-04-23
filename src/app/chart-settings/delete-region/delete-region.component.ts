import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {IChartData} from '../../models/i-chart-data';

@Component({
  selector: 'app-delete-region',
  templateUrl: './delete-region.component.html',
  styleUrls: ['./delete-region.component.css']
})
export class DeleteRegionComponent implements OnInit {
  @Input() regionsToDelete: IChartData[];
  @Output() deleteRegion = new EventEmitter();
  @Output() toggleDelete = new EventEmitter();
  @Output() deleteAllRegions = new EventEmitter();

  hover = [false, false, false, false];

  getColor(i: number): string[] {
    if (i === 0) {
      return ['#A8385D', '#752741'];
    }
    if (i === 1) {
      return ['#AAE3F5', '#769eab'];
    }
    if (i === 2) {
      return ['#7AA3E5', '#5572a0'];
    }
    return ['#A27EA8', '#715875'];
  }

  onDeleteRegionOnChart(index: number) {
    this.deleteRegion.emit(index);
    this.toggleDelete.emit();
  }

  onDeleteAllRegions() {
    this.deleteAllRegions.emit();
    this.toggleDelete.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
