import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';

import { LoginComponent } from './login/login.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component'; 

import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';



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
  { path: 'edit-user/:id', component: DialogEditComponent },
  {
    path: 'login',
    component: LoginComponent
  }  ,
  {path: '**', component: NotFoundComponent},
  {path: 'properties', component: PropertiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
