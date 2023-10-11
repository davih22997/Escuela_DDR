
import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public namePattern: string = '([a-zA-Z]+)';
  public nickPattern: string = '([_a-zA-Z]([0-9]|[_a-zA-Z])+)'
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors &&
      form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2:string) {

    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual:true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }

}

