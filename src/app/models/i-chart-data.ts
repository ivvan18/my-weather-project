export interface IChartData {
  name: string;
  series: IChartEntry[];
}

interface IChartEntry {
  name: Date;
  value: number;
}
