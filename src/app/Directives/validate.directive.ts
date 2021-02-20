import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';
import { ValidateConst } from './validate-const';

@Directive({
  selector: '[appValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateDirective, multi: true }],
})
export class ValidateDirective implements Validator {

  @Input() appValidate: string;
  validate(control: FormControl): ValidationErrors {
    const errorMessages = ValidateConst;
    const value = control.value;
    const validateType = errorMessages.find(x => x.type === this.appValidate);
    const isValidAccount = validateType.regex.test(control.value);
    const message = {
      'validate': {
        'message': validateType.message
      }
    };
    return isValidAccount ? null : message;
  }
}
