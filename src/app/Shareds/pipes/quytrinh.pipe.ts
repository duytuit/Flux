import { Pipe, PipeTransform } from '@angular/core';
import { quytrinh } from '../models/quytrinh';

@Pipe({
  name: 'quytrinh'
})
export class QuytrinhPipe implements PipeTransform {

  transform(value: quytrinh[], daky: string): any {
    if (daky=='') {
      return value;
    }
    else 
     {
       if(daky=='true')
       {
        value=value.filter(data=>data.Daky==true)
       }else
       {
        value=value.filter(data=>data.Daky==false)
       }
     }
   return value;
  }

}
