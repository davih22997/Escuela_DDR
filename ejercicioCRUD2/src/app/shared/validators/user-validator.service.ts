
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserValidator implements AsyncValidator {


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const user = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {


      // TODO: Comprobar user en BBDD
      console.log({UserValue: user})

      if (user === 'fernando@google.com') {
        subscriber.next({userTaken:true});
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
      // return;
    })

    return httpCallObservable;

    // return of ({
    //   emailTaken: true
    // }).pipe(
    //   delay(2000)
    // )
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
