import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  template:`<p> Child A</p>`
})
export class CompAComponent implements OnInit {
@Output() data: EventEmitter<any> = new EventEmitter();

ngOnInit():void{
  this.data.emit("CHILD-A-DATA")
}

}
