import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValidateConst } from './validate-const';

@Directive({
    selector: '[appOnlyInteger]'
})

export class OnlyIntegerDirective {
    private regex: RegExp = new RegExp(ValidateConst.find(x => x.type === 'integer').regex);

    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Right', 'Left'];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}

