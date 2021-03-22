import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.appHighlight;
  }
@HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.appHighlight||this.defaultColor||"red");
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}
