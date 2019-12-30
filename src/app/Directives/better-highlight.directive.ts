import { Directive, ElementRef, OnInit, Input, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('better-highlight') DefaultColor: string;
  @Input('highlightColor') HighlightColor: string;

  @HostBinding("style.backgroundColor") backgroundColor: string;

  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor=this.backgroundColor;
    // this.el.nativeElement.style.color="blue";
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement,"color","blue");

    this.backgroundColor = this.DefaultColor;
  }

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.HighlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.DefaultColor;
  }

  @HostListener('click') onMouseClick() {
    alert("Directive Clicked");
  }

}
