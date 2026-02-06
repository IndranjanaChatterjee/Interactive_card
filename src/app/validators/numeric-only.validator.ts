import { AbstractControl, ValidationErrors } from '@angular/forms';

export function numericOnlyValidator(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  // If empty, let required validator handle it
  if (!value) return null;

  // Allow digits and spaces (for card number format)
  const isValid = /^[0-9\s]+$/.test(value);

  return isValid ? null : { nonNumeric: true };
}
