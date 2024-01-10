import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:` Parent comp 
  <app-child [childData]="data"></app-child>
  `,
})
export class ParentComponent {
  data:string = "dummy data";
}
