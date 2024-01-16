import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <app-template-driven></app-template-driven>
    
    

    <!-- Data Bindings
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
    
    Directives
    <h1>ngFor</h1>
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
    </div> 
    <hr>
    <h1>ngClass</h1>
    <p [ngClass]="c1">Styled with ngClass</p>
    <hr>
    <h1>ngStyle</h1>
    <p [ngStyle]="s1">Styled with ngStyle</p>

    Directive
        <div appExample color="green">
        Hello
      </div>
      <div appExample color="blue">
        Hello
      </div>

    Custom Directives
    <h1>Custom If</h1>
    <div *appCustomif="true"> Hello </div>
    <hr>
    <h1>Custom For</h1>
    <ul>
      <li *appCustomfor="5; let i = index; let e = text">YGN - {{i}} - {{e}}</li>
    </ul> 
    <ul>
      <li *appCustomfor="names; let name; let i = index"> {{name}} - {{i}}</li>
    </ul>

    Pipes
   {{name | slice : 1 : 4}}
    <hr>
    {{"dummy text" | custom : 0 : 5}}

    Component Communication 
    <app-parent></app-parent>
    <hr>
    <app-parent2></app-parent2>
    <hr>
    <app-comp-a (data)="childData($event)"></app-comp-a>
    <app-comp-b [data]="childAtoBMessage"><app-comp-b> 
    
    Component Life Cycle Hook
    <app-example data="Hello">Example-Component-Content</app-example>
  -->
    
    
  `,

  styles: [".myclass{color:red;}"]
})
export class AppComponent {
  names: string[] = ["John", "Jack", "Isabelle", "Anna"];
  visible: boolean = false;
  num: number = 1;
  c1: string = "myclass";
  s1: any = {
    'background-color': 'blue',
    'color': 'white',
    'font-size': '12px'
  }
  name: string = "Aygyun"; 

  childAtoBMessage:string;
  childData(message:string){
    this.childAtoBMessage=message;
  }
}
