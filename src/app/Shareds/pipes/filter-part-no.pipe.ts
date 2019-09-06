import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPartNo'
})
export class FilterPartNoPipe implements PipeTransform {

  transform(value: any[], PartNo: string): any {
    if(!PartNo){
      return value;
    }else{
      if(PartNo)
      {
        value=value.filter(data=>data.toLowerCase().indexOf(PartNo.toLowerCase())!==-1)
      }
    }
   return value;
  }

}
