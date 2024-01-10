import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomfor]'
})
export class CustomforDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  // @Input() set appCustomfor(value:number){
  //   for(let i = 0; i < value; i++)
  //   this.viewContainerRef.createEmbeddedView(this.templateRef, {index : i, text: this.example })
  // }

  @Input() set appCustomfor(value: string[]) {
    for (let i = 0; i < value.length; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: value[i],
        index : i
      })
  }
  example: string = "example text";

}
