import { Component, VERSION } from '@angular/core';
import { Employee } from './Data-Employee';
import { TypeVariableEmployee } from './Type-Variable-Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  //Employees: TypeVariableEmployee[] = [];
  ngOnInit() {
    //his.Employees = Employee;
  }
}
