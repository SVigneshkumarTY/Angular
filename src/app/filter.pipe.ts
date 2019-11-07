import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(books: any[], searchValue: string ): any[] {
    
    if(searchValue === undefined){
      return books;
    }else{
      return books.filter(data => {
       return data.bookName.toLowerCase().includes( searchValue.toLowerCase())  ;
    });

  }

  }
}
  
