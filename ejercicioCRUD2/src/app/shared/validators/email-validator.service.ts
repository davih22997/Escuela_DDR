
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';
import { UsersService } from 'src/app/auth/services/users.service';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  constructor(private uService:UsersService){}

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


// return this.http.get(`https://miservicio.com`)
//           .pipe(
//               .map(resp => {
//                 return (resp.length === 0)
//                   ? null
//                   : {emailTaken: true}
//               })
//           )
