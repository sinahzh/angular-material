import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor() {}
  @Output() valueInputFilter = new EventEmitter<string>();

  ValueFilterEmployee(e: any) {
    this.valueInputFilter.emit(e);
  }

  ngOnInit(): void {}
}
