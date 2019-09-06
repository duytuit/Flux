import { Pipe, PipeTransform } from '@angular/core';
import { group } from '../models/group';

@Pipe({
  name: 'groupflux'
})
export class GroupfluxPipe implements PipeTransform {

  transform(value: group[], Groupid:string): any {
    if(!Groupid){
      return value;
    }else{
      if(Groupid)
      {
        value=value.filter(data=>data.Groupid.toLowerCase().indexOf(Groupid.toLowerCase())!==-1)
      }
    }
   return value;
  }
}
