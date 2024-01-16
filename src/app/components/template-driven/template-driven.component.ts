import { Component, ViewChild } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" #nameref="ngModel" ngModel> <br>
      <input type="text" name="surname" placeholder="Surname" ngModel> <br>
      <input type="email" name="email" placeholder="Email" ngModel><br>
      <input type="tel" name="tel" placeholder="Tel" ngModel> <br>
      <div ngModelGroup="address">
        <input type="text" name="country" placeholder="Country" ngModel> <br> 
        <input type="text" name="city" placeholder="City" ngModel> <br> 
        <input type="text" name="address" placeholder="Address" ngModel> <br> 
      </div>
      <button>Send</button>
    </form>
  `
})
export class TemplateDrivenComponent {
  @ViewChild("frm",{static:true}) frm:NgForm;
  @ViewChild("nameref",{static:true}) name: NgControl;

  ngOnInit() : void{
  setTimeout(()=>{
    this.frm.setValue({
      name: "Jack",
      surname: "Jones",
      email: "example@qwe.te",
      tel: "1231231",
      address: {
        country:"Bulgaria",
        city: "Ruse",
        address: "bul. deedee 3"
      }
    });
  }, 200)
  }
  onSubmit(data){
    console.log(`Value : ${this.frm.value}`);
    console.log(`Valid : ${this.frm.valid}`);
    console.log(`Touched : ${this.frm.touched}`);
    console.log(`Submitted : ${this.frm.submitted}`);
    console.log(`NgControl Name : ${this.name.value}`)


    console.log(data);
  }
}
