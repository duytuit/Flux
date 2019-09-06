import { Pipe, PipeTransform } from '@angular/core';
import { flux } from '../models/flux';

@Pipe({
  name: 'flux'
})
export class FluxPipe implements PipeTransform {

  transform(value: flux[], mahang: string,malot:string): any {
    if(!mahang&&!malot){
      return value;
    }else{
      if(mahang)
      {
        value=value.filter(data=>data.Mahang.toLowerCase().indexOf(mahang.toLowerCase())!==-1)
      }
      if(malot)
      {
        value=value.filter(data=>data.Malot.toLowerCase().indexOf(malot.toLowerCase())!==-1)
      }
    }
   return value;
  }

}
