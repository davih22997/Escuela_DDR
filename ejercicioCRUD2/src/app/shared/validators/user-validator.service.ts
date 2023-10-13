
import { Injectable} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { UsersService } from '../../auth/services/users.service';

@Injectable({providedIn: 'root'})
export class UserValidator  {
  constructor(private uService: UsersService){}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const user = control.value;

    return this.uService.getUsers()
      .pipe(
        map(users =>
          users.filter(
            u => u.id === user
          )[0]
          ? {userTaken:true}
          : null
          )
      )
  }
}
