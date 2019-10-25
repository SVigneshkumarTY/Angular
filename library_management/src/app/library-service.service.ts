import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  url:string= 'http://localhost:8080/librarymanagement';
  constructor(private http: HttpClient) { }

  addUser(data) {
    return this.http.post(`${this.url}/register`, data, headeroption );
  }

  addBook(data) {
    return this.http.post(`${this.url}/addBook`, data, headeroption);
  }
  
  userLogin(data) {
    return this.http.get(`${this.url}/login?userName=${data.userEmail}&password=${data.userPassword}`, headeroption );
  }

}
