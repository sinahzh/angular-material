import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component'; 
import { EmployeeService } from './services/employee.service';
import { PropertiesComponent } from './properties/properties.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TableComponent,
    PaginationComponent,
    DialogComponent,
    LoginComponent,
    EmployeeComponent,
    NotFoundComponent,
    DialogEditComponent,
    DialogDeleteComponent,
    PropertiesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [AuthGuard, EmployeeService],    
  bootstrap: [AppComponent]
})
export class AppModule { }

