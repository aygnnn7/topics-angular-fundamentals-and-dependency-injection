import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: ` Child Comp`
})
export class ChildComponent implements OnInit{
ngOnInit(): void {
   this.dataEvent.emit({message: "Hello"});
}
@Output() dataEvent:EventEmitter<any> = new EventEmitter();

}
