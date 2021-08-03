import {   Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit } from '@angular/core';
import { Employee } from './Data-Employee';
import { TypeVariableEmployee } from './Type-Variable-Employee';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  data: any;

  Employees: TypeVariableEmployee[] = [];

  //dataSource = new MatTableDataSource<TypeVariableEmployee>(Employee);
  dataSource = new MatTableDataSource<TypeVariableEmployee>(Employee);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(PaginationComponent)
  PaginationComponent: PaginationComponent = new PaginationComponent;

  @ViewChild(TableComponent)
  TableComponent: TableComponent = new TableComponent;
  
  //name = 'Angular ' + VERSION.major;
  //Employees: TypeVariableEmployee[] = [];
  InputFilter(filterValue: string) {
    console.log("filterValue",filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TypeVariableEmployee>(
      Employee
    );

 

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.PaginationComponent.matPaginator;
    this.dataSource.sort = this.sort;
  }

  onPaginationChange(event:any) {
    //  this.dataSource.paginator.length = event.length;
    //  this.dataSource.paginator.pageSize = event.pageSize;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
  }




  /* dialog */
  resultr:any;
  animal: string = "";
  name: string = "sina";
  id: number = 0;
  FirstName: string  = "";
  SecondName: string = "";
  NationalCode: number = 0;
  TotalTimeEmployeeInMonth: number = 0;
  AverageEmployeeArrivalTime: number = 0;
  AverageEmployeeDepartureTime: number = 0;
  NumberOfProductsProducedByAnyEmployee: number = 0;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: { id: this.id, 
        FirstName: this.FirstName, SecondName: this.SecondName,
        NationalCode: this.NationalCode, TotalTimeEmployeeInMonth:this.TotalTimeEmployeeInMonth,
        AverageEmployeeArrivalTime: this.AverageEmployeeArrivalTime, AverageEmployeeDepartureTime:this.AverageEmployeeDepartureTime
        ,NumberOfProductsProducedByAnyEmployee:this.NumberOfProductsProducedByAnyEmployee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    this.resultr  = result;
    console.log("result r in app.component.ts",this.resultr)
    });
  }
}
