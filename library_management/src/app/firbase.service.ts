import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StudentsComponent } from './students/students.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentInfo } from './student-info/student-info';

@Injectable({
  providedIn: 'root'
})
export class FirbaseService {

  url:string = 'https://angular-http4.firebaseio.com/';

  selectedUser: StudentInfo ={
    bookid: null,
      bookname: null,
      author : null,
      id: null
  }

  constructor(private http: HttpClient) { }

  users =[];

  getData(){
    return this.http.get(`${this.url}/users.json`).pipe(map(resData=>{
      let usersArray =[];
      for(let key in resData){
        usersArray.push({...resData[key], id: key});

      }
      return usersArray;
    })).subscribe(data =>{
      this.users = data;
      console.log(data);
    }, err=>{
      console.log(err);
    });
  }

  // postData(data){
  //   return this.http.post(`${this.url}/users.json`,data);
  // }

  // updateData(data){
  //   return this.http.put(`${this.url}users/${data.id}.json`, data);
  // }

  // deleteData(data){
  //   return this.http.delete(`${this.url}users/${data.id}.json`);
  // }

  ngDoCheck(){
      this.getData;
  }

}

