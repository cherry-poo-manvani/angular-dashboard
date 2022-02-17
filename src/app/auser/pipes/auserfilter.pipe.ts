import { Pipe, PipeTransform } from '@angular/core';
import { Auser } from '../models/auser.model';

@Pipe({
  name: 'auserfilter'
})
export class AUserfilterPipe implements PipeTransform {

  transform(users: Auser[], searchName: string): Auser[] {
    if (searchName == '') {
      return users
    }


    return users.filter(data => {
      return data.fullname.toLowerCase().match(searchName.toLowerCase())
    })
  }

}
