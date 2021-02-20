
import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
    ]
})
export class EqualValidatorDirective implements Validator {
    constructor(@Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    private get isReverse() {
        if (!this.reverse) { return false; }
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        const v = c.value;

        const e = c.root.get(this.validateEqual);

        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }

        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }

        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }

        return null;
    }
}
