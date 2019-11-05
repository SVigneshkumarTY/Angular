import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchValue: string ):any[] {
    if(searchValue === undefined){
      return users;
    }else{
      return users.filter(data => {
       return data.name.toLowerCase().includes( searchValue.toLowerCase()) ;
    });

  }

  }
}
