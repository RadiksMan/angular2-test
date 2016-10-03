import { Directive, elementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private elementRef: elementRef, private renderer: Renderer) {
     //this.elementRef.nativeElement.style.backgroundColor = 'green';
     this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
