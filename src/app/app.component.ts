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
export class AppComponent   {
 
  constructor() {}

 

  ngOnInit() {
     
  }
}
