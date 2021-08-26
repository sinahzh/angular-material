import { Component, OnInit , Inject, Output, EventEmitter} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TypeVariableEmployee } from '../Type-Variable-Employee';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent {
  

  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeVariableEmployee) 
    { }

  AddForm = this.fb.group({
    index: null,
    firstName: [''],
    lastName: [''],
    NationalCode: null,
    TotalTimeEmployeeInMonth: null,
    AverageEmployeeArrivalTime: null,
    AverageEmployeeDepartureTime: null,
    NumberOfProductsProducedByAnyEmployee: null
    
  });
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
   

    console.log("dialog component ts",this.AddForm.value);
    let data = this.AddForm.value;
     this.dialogRef.close(data);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



}
