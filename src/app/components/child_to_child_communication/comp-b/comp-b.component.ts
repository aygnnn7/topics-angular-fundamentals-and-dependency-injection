import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  template:` 
    <p> Child B {{data}}</p>
  `
})
export class CompBComponent {
  @Input() data:string;
}
