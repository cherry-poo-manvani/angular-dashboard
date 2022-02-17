import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/user.model';

@Pipe({
  name: 'userfilter'
})
export class AUserfilterPipe implements PipeTransform {

  transform(users: User[], searchName: string): User[] {
    if (searchName == '') {
      return users
    }


    return users.filter(data => {
      return data.firstname.toLowerCase().match(searchName.toLowerCase())
    })
  }

}
