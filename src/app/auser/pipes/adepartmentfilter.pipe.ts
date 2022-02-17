import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'departmentfilter'
})
export class Departmentfilter implements PipeTransform {
  transform(value: number, department: any[]): string  {
    let name:string = department?.find((data)=> {
      return data.id == value
    }).name;
     return name
  }
}
