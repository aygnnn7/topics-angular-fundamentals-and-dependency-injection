import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-service-example',
  template: `
  <h1> Service Activity Order: </h1>
   <ol>
    <li *ngFor="let activity of ServiceActivityList; index as i"> {{activity}} </li>
  </ol>
    
  <button (click)="AddEmployee()">Add</button>
  <button (click)="RemoveEmployee()">Remove</button>
  <button (click)="GetEmployee()">Get</button>
  `
})
export class ServiceExampleComponent {
  ServiceActivityList: string[] = [];

  constructor(private employeeService: EmployeeService) {

  }
  AddEmployee(): void {
    console.log("geldi");

    this.ServiceActivityList.push(this.employeeService.add());
  }
  RemoveEmployee(): void {
    console.log("geldi");
    this.ServiceActivityList.push(this.employeeService.remove());
  }
  GetEmployee(): void {
    this.ServiceActivityList.push(this.employeeService.get());
  }

}
