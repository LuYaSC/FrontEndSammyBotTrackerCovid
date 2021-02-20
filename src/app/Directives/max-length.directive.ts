import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {

  @Input() appMaxLength = 0;
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'Right', 'Left', 'ArrowRight', 'Control'];

  constructor(private element: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {

    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.element.nativeElement.value;
    const newstr = current.substring(0, event.currentTarget.selectionStart);
    const newstr2 = current.substring(event.currentTarget.selectionEnd, current.length);
    const next: string = newstr.concat(event.key, newstr2);
    if (next && next.length > this.appMaxLength) {
      event.preventDefault();
    }
  }

}
