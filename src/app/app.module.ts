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
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FilterPipe } from './filter.pipe';

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
    UpdateBookComponent,
    UpdateUserComponent,
    LogoutComponent,
    ChangepasswordComponent,
    FilterPipe
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
