import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  printMessage = '';
  issueBookList: any = [];
  selectedUser:any = {
    userId: '',
    userName: '',
    userEmail: '',
    userGender: '',
    userContactNo: '',
    userRole: ''
  };
  
  studentBookRequest = {
    userId : '',
    bookId : '',
  }

  selectedBook = {
    bookId: '',
    bookName: '',
    authorName: '',
    category: ''
  };

  url: string = 'http://localhost:8080/librarymanagement';
  constructor(private http: HttpClient) { }

  addUser(data) {
    return this.http.post(`${this.url}/register`, data, headeroption);
  }



  userLogin(data) {
    return this.http.get(`${this.url}/login?userName=${data.userEmail}&password=${data.userPassword}`);
  }

  users: any = [];
  getAllUsers() {
    this.http.get(`${this.url}/get-all`).pipe(map(resData => {
      let userArr = [];
      for (let val in resData) {
        userArr.push(resData[val]);
      }
      return userArr;
    })).subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);
    });

  }

  updateUser(data) {
    return this.http.put(`${this.url}/update`, data, headeroption);
  }

  removeUser(id) {
    return this.http.delete(`${this.url}/remove/${id}`, headeroption);
  }


  addBook(data) {
    return this.http.post(`${this.url}/addBook`, data, headeroption);
  }

  books: any = [];
  getAllBook() {
    this.http.get(`${this.url}/getAllBook`).pipe(map(resData => {
      let bookArr = [];
      for (let val in resData) {
        bookArr.push(resData[val]);
      }
      return bookArr;
    })).subscribe(data => {
      this.books = data;
    }, err => {
      console.log(err);
    });

  }

  updateBook(data) {
    return this.http.put(`${this.url}/updateBook`, data, headeroption);
  }

  removeBook(id) {
    return this.http.delete(`${this.url}/deleteBook/${id}`, headeroption);
  }

  accepBookIssueRequest(userId, bookId) {
    return this.http.get(`${this.url}/acceptBookRequest?userId=${userId}&bookId=${bookId}`);
  }

  showIssueBooks() {
    this.http.get(`${this.url}/getIssueBooks?userId=${localStorage.getItem('reqUserId')}`).pipe(map(resData => {
      let bookArr = [];
      for (let val in resData) {
        bookArr.push(resData[val]);
      }
      return bookArr;
    })).subscribe(data => {
      this.issueBookList = data;
    }, err => {
      console.log(err);
    });

    

    //return this.http.get(`${this.url}/getIssueBooks?userId=${userId}`);
  }
  returnBook(book){
    //return this.http.get(`${this.url}/login?userName=${data.userEmail}&password=${data.userPassword}`);
    return this.http. delete(`${this.url}/returnBook?bookId=${book.bookId}`);
  }
}
