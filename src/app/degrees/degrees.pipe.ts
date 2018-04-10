import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toString() + '\u2103'}`;
  }
}
