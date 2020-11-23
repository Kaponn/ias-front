import { FormGroup } from '@angular/forms';

export function pudzian(textToCheck: string, catalyst: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[textToCheck];

    if (control.value.toLowerCase() === catalyst) {
      control.setErrors({ pudzian: true });
    }
  };
}

export function mustMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
