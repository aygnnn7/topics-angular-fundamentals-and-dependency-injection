import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetterValidator } from 'src/app/validators/customValidation';

@Component({
  selector: 'app-model-driven',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name">  <br>
      <div *ngIf="!name.valid && (name.dirty || name.touched)">  {{name.errors | json}} <br></div>
    
      <input type="text" placeholder="Surname" formControlName="surname"><br>
      <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">  {{surname.errors | json}} <br></div>

      <input type="text" placeholder="Email" formControlName="email"><br>
      <div *ngIf="!email.valid && (email.dirty || email.touched)">  {{email.errors | json}} <br></div>
     
      <input type="text" placeholder="Tel" formControlName="tel"><hr>
      <div formGroupName="address">
        <input type="text" name="country" placeholder="Country" formControlName="country">
        <input type="text" name="city" placeholder="City" formControlName="city">
        <input type="text" name="address" placeholder="Address" formControlName="address">
      </div>
      <hr>
      <button>Send</button>
      
    </form>
    <hr>
    <button (click)="Ok()">Ok</button>
    <h1>Is Valid: {{frm.valid}}</h1>
    <h1>Value Changes Detected: {{valuechanges}}</h1>
    <h1>Status Changes Detected: {{statuschanges}}</h1>
  `
})
export class ModelDrivenComponent {
  frm:FormGroup;
  valuechanges: number = 0;
  statuschanges: number = 0;
  constructor(private formBuilder:FormBuilder){
    this.frm = formBuilder.group({
      name: ["", [Validators.required,capitalLetterValidator(3)] ],
      surname: ["", Validators.required],
      email: ["", [Validators.required,Validators.email]], 
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address:[""]
      })
    })


    this.frm.valueChanges.subscribe({
      next: data => {
        this.valuechanges++;
        console.log(data);
        
      }
    })
    this.frm.statusChanges.subscribe({
      next: data =>{
        this.statuschanges++;
        console.log(data);
        
      }
    })
  }

  onSubmit(){
  }

  Ok(){
    this.frm.get("name").setValue("Jack", {onlySelf: true});
  }


  
  get name(){
    return this.frm.get("name");
  }
  get surname(){
    return this.frm.get("surname");
  }
  get email(){
    return this.frm.get("email");
  }

  

}
