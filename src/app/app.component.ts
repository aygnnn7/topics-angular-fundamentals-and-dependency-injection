import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: `
    
  `,
  /*
  template: `
  Text Interpolation
  <h1>{{title}}</h1>
 
  Property Binding
  <input type="text" [placeholder]="title">
  <app-home [pageName]=""></app-home>
  
  Two-Way Data Binding
  <p> Two-Way </p>
  <input type="text" [(ngModel)]="name">
  <hr>
  <p>{{name}}
  `,*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';
  name: string; 
}
