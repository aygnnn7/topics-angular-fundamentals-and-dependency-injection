import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  add(){
    return"Employee added.";
  }
  remove(){
    return "Employee removed.";
  }
  get(){
    return "Employee data received.";
  }
}
