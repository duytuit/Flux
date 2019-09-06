import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLotNo'
})
export class FilterLotNoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
