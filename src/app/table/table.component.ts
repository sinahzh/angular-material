import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { TypeVariableEmployee } from '../Type-Variable-Employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../Data-Employee';
import { PaginationComponent } from '../pagination/pagination.component';
/*  */
import { EmployeeService } from '../services/employee.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() DataEmployee !: any;
  // @ViewChild(MatSort)
  // sort: MatSort = new MatSort;
  // @ViewChild(PaginationComponent)
  // PaginationComponent: PaginationComponent = new PaginationComponent; // @ViewChild('paginator1') paginator1: MatPaginator;
  // @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild(MatSort) matSort !: MatSort;
  @ViewChild(PaginationComponent)
  PaginationComponent: PaginationComponent = new PaginationComponent;
  @ViewChild(TableComponent)
  TableComponent!: TableComponent ;

  data: any;
  name: string = "sina";
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  NationalCode: number = 0;
  TotalTimeEmployeeInMonth: number = 0;
  AverageEmployeeArrivalTime: number = 0;
  AverageEmployeeDepartureTime: number = 0;
  NumberOfProductsProducedByAnyEmployee: number = 0;
  Employees: TypeVariableEmployee[] = [];

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'NationalCode',
    'TotalTimeEmployeeInMonth',
    'AverageEmployeeArrivalTime',
    'AverageEmployeeDepartureTime',
    'NumberOfProductsProducedByAnyEmployee',
    'Update',
    'Delete'
  ];
  obj: any;

  ngOnInit() {

    
  }
  constructor(private EmployeeService: EmployeeService,
     public dialog: MatDialog) { }

  /* dialog update data */
  updateItem(id: number, obj:any ) {

    this.id = id;
    this.obj = obj;
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.NationalCode = NationalCode;
    // this.TotalTimeEmployeeInMonth = TotalTimeEmployeeInMonth;
    // this.AverageEmployeeArrivalTime = AverageEmployeeArrivalTime;
    // this.AverageEmployeeDepartureTime = AverageEmployeeDepartureTime;
    // this.NumberOfProductsProducedByAnyEmployee = NumberOfProductsProducedByAnyEmployee;
    
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: {
        id: obj.id,
        firstName: obj.firstName, lastName: obj.lastName,
        NationalCode: obj.NationalCode,
        TotalTimeEmployeeInMonth: obj.TotalTimeEmployeeInMonth,
        AverageEmployeeArrivalTime: obj.AverageEmployeeArrivalTime,
        AverageEmployeeDepartureTime: obj.AverageEmployeeDepartureTime
        , NumberOfProductsProducedByAnyEmployee: obj.NumberOfProductsProducedByAnyEmployee
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
     
        const upda = this.EmployeeService.updateUser(this.id, result).subscribe(() => {
          console.log('update obj -> ', result)
          this.GetUsers();

        }, (err) => {
          console.log("ERROR s", result)
          console.log(err);;
        //this.GetUsers();
      });
     
    });
}



  /* dialog delete data */

  deleteItem(id: number, firstName: any) {

    this.id = id;
    this.firstName = firstName;
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        id: this.id,
        firstName: this.firstName, lastName: this.lastName,
        NationalCode: this.NationalCode,
        TotalTimeEmployeeInMonth: this.TotalTimeEmployeeInMonth,
        AverageEmployeeArrivalTime: this.AverageEmployeeArrivalTime,
        AverageEmployeeDepartureTime: this.AverageEmployeeDepartureTime
        , NumberOfProductsProducedByAnyEmployee: this.NumberOfProductsProducedByAnyEmployee
      }
    });

    dialogRef.afterClosed().subscribe((result: number) => {
     
        const foundIndex = this.EmployeeService.deleteUser(this.id).subscribe(() => {
          console.log('User delete successfully!')
          this.GetUsers();
        }, (err) => {
          console.log(err);;
        //this.GetUsers();
      });
     
    });
}

dataSource = new MatTableDataSource<TypeVariableEmployee>();

GetUsers() {
  this.EmployeeService.GetUsers().subscribe((data: any) => {

    this.DataEmployee = data.data;
    console.log('dataSurce->',this.dataSource)
  });
}
  

  onPaginationChange(_event: any) {
    //  this.dataSource.paginator.length = event.length;
    //  this.dataSource.paginator.pageSize = event.pageSize;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
  }
}
