import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { StudentComponent } from './student/student.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'viewusers', component: ViewUsersComponent},
  {path: 'viewbooks', component: ViewbooksComponent},
  {path: 'student', component: StudentComponent},
  {path: 'librarian', component: LibrarianComponent},
  {path: 'addbooks', component: AddbooksComponent},
  {path: 'books', component: BooksComponent},
  {path: 'updateBook', component: UpdateBookComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'logout' , component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
