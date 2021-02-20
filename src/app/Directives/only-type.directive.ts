import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ValidateConst } from './validate-const';
@Directive({
  selector: '[appOnlyType]'
})

export class OnlyTypeDirective {
  @Input('appOnlyType') appOnlyType: string;

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Control', 'Right', 'Left'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    if (this.specialKeys.indexOf(event.key) !== -1 || event.ctrlKey) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const newstr = current.substring(0, event.currentTarget.selectionStart);
    const newstr2 = current.substring(event.currentTarget.selectionEnd, current.length);
    const next: string = newstr.concat(event.key, newstr2);
    if (next && !String(next).match(ValidateConst.find(x => x.type === this.appOnlyType).regex)) {
      event.preventDefault();
    }
  }
}
