
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map} from 'rxjs';

import { UsersService } from 'src/app/auth/services/users.service';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  // METHODS
  // Constructor
  constructor(private uService:UsersService){}

  // Validation
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    return this.uService.getUsers()
      .pipe(
        map(users =>
          users.filter(
            u => u.email === email
          )[0]
          ? {emailTaken:true}
          : null
        )
      )
  }
}
