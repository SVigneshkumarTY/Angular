import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { AdminComponent } from './admin/admin.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { BooksComponent } from './books/books.component';
import {HttpClientModule} from '@angular/common/http';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AllocatedBooksComponent } from './allocated-books/allocated-books.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { FilterPipe } from './filter.pipe';
import { Filter2Pipe } from './filter2.pipe';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    LibrarianComponent,
    AdminComponent,
    ViewUsersComponent,
    ViewbooksComponent,
    AddbooksComponent,
    BooksComponent,
    ChangepwdComponent,
    AllocatedBooksComponent,
    UpdatebookComponent,
    FilterPipe,
    Filter2Pipe,
    UpdateuserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
