import {SafeResourceUrl} from '@angular/platform-browser';

export interface IChartData {
  name: string;
  series: IChartEntry[];
}

export interface IChartEntry {
  name: Date;
  value: number;
  description: string;
  image_path: SafeResourceUrl;
}
