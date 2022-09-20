import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {formatDate} from '@angular/common';

export function comparePassword(control: AbstractControl): ValidationErrors | null {
  const check = control.value;
  return (check.pass === check.confirmPass) ? null : {passwordNotMatch: true};
}

// TEST CUSTOM VALIDATE
// export function checkEmail(control: FormControl): ValidationErrors | null {
//   const check = control.value;
//   return (check.includes('an')) ? null : {emailError: true};
// }


export function identityRevealedValidator(control: AbstractControl): ValidationErrors | null {
  const startDate = control.value.startDate;
  const endDate = control.value.endDate;

  const date1 = formatDate(startDate, 'yyyy-MM-dd', 'en_US');
  const date2 = formatDate(endDate, 'yyyy-MM-dd', 'en_US');
  return date1 <= date2 ? null : {dateError: true};
}
