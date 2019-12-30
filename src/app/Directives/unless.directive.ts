import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[ngUnless]'
})
export class UnlessDirective {
  
  
  
  @Input('ngUnless') public set value(condition : boolean) {
    if (condition) {
      this.viewContainer.clear();
    }else{
     this.viewContainer.createEmbeddedView(this.templateRef); 
    }
  }
  
  

  constructor(public templateRef:TemplateRef<any>,public viewContainer:ViewContainerRef) { }

}
