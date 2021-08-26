import {   Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit } from '@angular/core';
import { Employee } from '../Data-Employee';
import { TypeVariableEmployee } from '../Type-Variable-Employee';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationComponent } from '../pagination/pagination.component';
import { TableComponent } from '../table/table.component';
import { Login } from 'src/app/interfaces/login';  
import { AuthService } from '../services/auth.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {

  data: any;
  resultr:any;
  animal: string = "";
  name: string = "sina";
  index: number = 0;
  firstName: string  = "";
  lastName: string = "";
  NationalCode: number = 0;
  TotalTimeEmployeeInMonth: number = 0;
  AverageEmployeeArrivalTime: number = 0;
  AverageEmployeeDepartureTime: number = 0;
  NumberOfProductsProducedByAnyEmployee: number = 0;
  Employees: TypeVariableEmployee[] = [];




  dataSource = new MatTableDataSource<TypeVariableEmployee>(Employee);



  @ViewChild(PaginationComponent)
  PaginationComponent: PaginationComponent = new PaginationComponent;

  @ViewChild(TableComponent)
  TableComponent: TableComponent = new TableComponent;

  InputFilter(filterValue: string) {
    console.log("filterValue",filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.PaginationComponent.matPaginator;
    this.dataSource.sort = this.TableComponent.matSort;
  }

  constructor(public dialog: MatDialog,
    private router: Router, private authService: AuthService) {}


  /* ---Logout--- */
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
 } 
 /* ---Logout--- */


  /* dialog */
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: { index: this.index, 
        firstName: this.firstName, lastName: this.lastName,
        NationalCode: this.NationalCode, 
        TotalTimeEmployeeInMonth:this.TotalTimeEmployeeInMonth,
        AverageEmployeeArrivalTime: this.AverageEmployeeArrivalTime, 
        AverageEmployeeDepartureTime:this.AverageEmployeeDepartureTime
        ,NumberOfProductsProducedByAnyEmployee:this.NumberOfProductsProducedByAnyEmployee
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        Employee.push(result);
        this.dataSource = new MatTableDataSource<TypeVariableEmployee>(
          Employee
        );
        this.dataSource.paginator = this.PaginationComponent.matPaginator;
        this.dataSource.sort = this.TableComponent.matSort;
      });
  }

  id!: string;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TypeVariableEmployee>(
      Employee
    );
    this.id != localStorage.getItem('token'); 
    console.log("id is:",this.id); 
  }

}
