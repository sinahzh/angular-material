import {   Component,
  OnInit,
  Input,
  ViewChild,
  NgZone,
  AfterViewInit, 
  ChangeDetectorRef} from '@angular/core';
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
import { EmployeeService } from '../services/employee.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

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
  id: number = 0;
  firstName: string  = "";
  lastName: string = "";
  NationalCode: number = 0;
  TotalTimeEmployeeInMonth: number = 0;
  AverageEmployeeArrivalTime: number = 0;
  AverageEmployeeDepartureTime: number = 0;
  NumberOfProductsProducedByAnyEmployee: number = 0;
  Employees: TypeVariableEmployee[] = [];




  // dataSource = new MatTableDataSource<TypeVariableEmployee>(Employee);
  dataSource = new MatTableDataSource<TypeVariableEmployee>();



  @ViewChild(PaginationComponent)
  PaginationComponent: PaginationComponent = new PaginationComponent;

  @ViewChild(TableComponent)
  TableComponent!: TableComponent ;
  result: any;

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
    private router: Router, private authService: AuthService,
        private EmployeeService: EmployeeService,
    ) {}


  /* ---Logout--- */
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
 } 
 /* ---Logout---*/

 /* dialog delete data */

//  deleteItem(id: number) {
//   this.id = id;
//   const dialogRef = this.dialog.open(DialogDeleteComponent, {
//       data: { id: this.id, 
//       firstName: this.firstName
//     }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     if (result === 1) {
//       const foundIndex = this.EmployeeService.deleteUser(this.id);
//       this.GetUsers();
//     }
//   });
// }

  /* dialog update data */
  // updateItem(id: number) {
  //   this.id = id;
  //   const dialogRef = this.dialog.open(DialogDeleteComponent, {
  //       data: { id: this.id, 
  //         firstName: this.firstName, lastName: this.lastName,
  //         NationalCode: this.NationalCode, 
  //         TotalTimeEmployeeInMonth:this.TotalTimeEmployeeInMonth,
  //         AverageEmployeeArrivalTime: this.AverageEmployeeArrivalTime, 
  //         AverageEmployeeDepartureTime:this.AverageEmployeeDepartureTime
  //         ,NumberOfProductsProducedByAnyEmployee:this.NumberOfProductsProducedByAnyEmployee
  //     }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 1) {
  //       const foundIndex = this.EmployeeService.deleteUser(this.id);
  //       this.GetUsers();
  //     }
  //   });
  // }

  /* dialog insert data*/
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: { id: this.id, 
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
        this.EmployeeService.AddUser(result).subscribe(() => {
          console.log('User added successfully!')
          this.GetUsers();
        }, (err) => {
          console.log(err);
      });
        // Employee.push(result);
        // this.dataSource = new MatTableDataSource<TypeVariableEmployee>(
        //   Employee
        // );
        // this.dataSource.paginator = this.PaginationComponent.matPaginator;
        // this.dataSource.sort = this.TableComponent.matSort;
      });
  }

  

  idAuth!: string;



  ngOnInit() {
    this.GetUsers();
    this.idAuth != localStorage.getItem('token'); 
    console.log("id is:",this.id); 
  }
  GetUsers() {
    this.EmployeeService.GetUsers().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<TypeVariableEmployee>(data.data);
      this.dataSource.paginator = this.PaginationComponent.matPaginator;
      this.dataSource.sort = this.TableComponent.matSort;
    });
  }

}
