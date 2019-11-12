import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  isLoggedIn=false;
  printMessage='';
  status=true;
  status1=false;
  url:string= 'http://localhost:8083/librarymanagement';
  selectedUser:any={
    UserName:null,
    userContactNo:null,
    userEmail:null,
    userPassword:null,
    userRole:null,
    userGender:null,
    userId:null
  }

  allBooks:any[]=[];

  selectedBook:any={};
  constructor(private http: HttpClient) { }
  userName='';
  userId;

  addUser(data) {
    return this.http.post(`${this.url}/register`, data, headeroption );
  }

  addBook(data) {
    return this.http.post(`${this.url}/addBook`, data, headeroption);
  }
  
  userLogin(name,password) {
    return this.http.get<any>(`${this.url}/login?userName=${name}&password=${password}`, headeroption );
  }

  viewUsers(){
    return this.http.get<any>(`${this.url}/get-all`,headeroption);
  }

  deleteUser(id){
    return this.http.delete(`${this.url}/remove/${id}`,headeroption);
  }

  updateUser(user){
    return this.http.put(`${this.url}/update`,user,headeroption);
  }

  viewBooks(){
    return this.http.get<any>(`${this.url}/getAllBook`,headeroption);
  }
  deleteBook(id){
    return this.http.delete(`${this.url}/deleteBook/${id}`,headeroption);
  }
  updateBook(book){
    return this.http.put(`${this.url}/updateBook`,book,headeroption);
  }

  changepassword(id,op,np){
    return this.http.get(`${this.url}/changepwd?userEmail=${id}&userPassword=${op}&newPassword=${np}`,headeroption);
    }

    requestBook(data){
      return this.http.post(`${this.url}/allocatebook/${this.userId}`,data,headeroption);
    }

    bookrequests(){
      return this.http.get(`${this.url}/viewreqs`,headeroption);
    }

    acceptReq(data){
      return this.http.post(`${this.url}/acceptreq`,data,headeroption);
    }

    userBooks(){
      return this.http.get(`${this.url}/${this.userId}`,headeroption);
    }

    returnBook(id,data){
      return this.http.post(`${this.url}/bookaction/${id}`,data,headeroption);
    }

    declineBook(id,data){
      return this.http.post(`${this.url}/bookaction1/${id}`,data,headeroption);
    }

}
