import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: `
    <!-- <h1>ngFor</h1>
    <ul>
      <li *ngFor="let name of names; 
      index as i; 
      let first = first">
        {{name}} -> {{i}} -> isfirst = {{first}}
      </li>
    </ul>
    <hr> 

    <h1>ngIf</h1>
    <div *ngIf="visible; else elseMessage">Hello</div>
    <ng-template #elseMessage>
      else message
    </ng-template>
    <hr> 

    <h1>ngSwitch</h1>
    <div [ngSwitch]="num"]>
        <div *ngSwitchCase="1">Number is 1</div>
        <div *ngSwitchCase="2">Number is 2</div>
        <div *ngSwitchDefault>None of them</div>
    </div> -->
    <hr>
    <h1>ngClass</h1>
    <p [ngClass]="c1">Styled with ngClass</p>
    <hr>
    <h1>ngStyle</h1>
    <p [ngStyle]="s1">Styled with ngStyle</p>
  `,

  /* Data Bindings
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
  styles: [".myclass{color:red;}"]
})
export class AppComponent {
  names:string[] = ["John", "Jack", "Isabel", "Anna"];
  visible: boolean = false;
  num: number = 1;
  c1: string = "myclass";
  s1: any = {
    'background-color': 'blue',
    'color': 'white',
    'font-size': '12px'
  }
}
