import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `ChildComp - {{childData}}`
})
export class ChildComponent {
  @Input() childData:string;
}
