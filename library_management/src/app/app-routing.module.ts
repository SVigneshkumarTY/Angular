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
import { ChangepwdComponent } from './changepwd/changepwd.component';


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
  {path: 'changepwd',component:ChangepwdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
