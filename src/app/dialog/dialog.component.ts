import { Component, OnInit , Inject} from '@angular/core';
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
    id: 0,
    firstName: '',
    lastName: '',
    NationalCode: 0,
    TotalTimeEmployeeInMonth: 0,
    AverageEmployeeArrivalTime: 0,
    AverageEmployeeDepartureTime: 0,
    NumberOfProductsProducedByAnyEmployee: 0
    
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("dialog component ts",this.AddForm.value);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



}
