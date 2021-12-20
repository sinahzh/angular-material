import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TypeVariableEmployee } from '../Type-Variable-Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeVariableEmployee, public employeeService: EmployeeService ) 
    { }

    editForm = this.fb.group({
      id: this.data.id,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      NationalCode: this.data.NationalCode,
      TotalTimeEmployeeInMonth: this.data.TotalTimeEmployeeInMonth,
      AverageEmployeeArrivalTime: this.data.AverageEmployeeArrivalTime,
      AverageEmployeeDepartureTime: this.data.AverageEmployeeDepartureTime,
      NumberOfProductsProducedByAnyEmployee: this.data.NumberOfProductsProducedByAnyEmployee
      
    });

    onSubmit() {
      console.log("dialog component ts",this.editForm.value);
      let data = this.editForm.value;
       this.dialogRef.close(data);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
