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

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'NationalCode',
    'TotalTimeEmployeeInMonth',
    'AverageEmployeeArrivalTime',
    'AverageEmployeeDepartureTime',
    'NumberOfProductsProducedByAnyEmployee'
  ];

  ngOnInit() {
  

  }

  
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.PaginationComponent.matPaginator;
  //   this.dataSource.sort = this.sort;
  // }

  onPaginationChange(event:any) {
    //  this.dataSource.paginator.length = event.length;
    //  this.dataSource.paginator.pageSize = event.pageSize;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
    //  this.dataSource.paginator.pageIndex = event.pageIndex;
  }
}
