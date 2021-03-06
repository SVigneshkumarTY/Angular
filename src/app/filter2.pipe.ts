import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(users: any[], searchValue: string ): any[] {
    
    if(searchValue === undefined){
      return users;
    }else{
      return users.filter(data => {
       return data.userName.toLowerCase().includes( searchValue.toLowerCase())  ;
    });

  }

  }

}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter2'
// })
// export class Filter2Pipe implements PipeTransform {

//  transform(users: any[], searchValue: string ): any[] {
    
//     if(searchValue === undefined){
//       return users;
//     }else{
//       return users.filter(data => {
//        return data.userName.toLowerCase().includes( searchValue.toLowerCase())  ;
//     });

//   }

//   }

// }
