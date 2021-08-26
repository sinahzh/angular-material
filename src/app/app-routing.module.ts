import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  
  {
    path: 'employee',
    component: EmployeeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }  ,
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
