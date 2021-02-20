import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualValidatorDirective } from './validateequal.directive';
import { OnlyNumberDirective } from './only-number.directive';
import { OnlyIntegerDirective } from './only-integer.directive';
import { ValidateDirective } from './validate.directive';
import { MaxLengthDirective } from './max-length.directive';
import { OnlyAlphanumericNotSymbolsDirective } from './only-alphanumeric-not-symbols.directive';
import { OnlyTypeDirective } from './only-type.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    EqualValidatorDirective,
    OnlyNumberDirective,
    OnlyIntegerDirective,
    ValidateDirective,
    MaxLengthDirective,
    OnlyAlphanumericNotSymbolsDirective,
    OnlyTypeDirective,
  ],
  declarations: [
    EqualValidatorDirective,
    OnlyNumberDirective,
    OnlyIntegerDirective,
    ValidateDirective,
    MaxLengthDirective,
    OnlyAlphanumericNotSymbolsDirective,
    OnlyTypeDirective,
  ]
})
export class DirectivesModule { }
