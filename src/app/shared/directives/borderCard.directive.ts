import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPizzaBorderCard]'
})
export class BorderCardDirective {

  @Input('appPizzaBorderCard') borderColor: string | undefined;
  GREY_COLOR = '#f5f5F5';
  GREEN_COLOR = '#009688';
  PINK_COLOR = '#ee6e73';

  constructor(private element : ElementRef) {
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
   }

  private setBorder(color: string) :void {

    const border ='solid 4px' + color;
    this.element.nativeElement.style.border = border;
    console.log(border);
  }
  private setHeight(height: number): void {
    this.element.nativeElement.style.height = height +'px';

  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.GREEN_COLOR);
    console.log(this.borderColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.GREY_COLOR);
  }

}
