
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      console.log({email})

      const emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;

      if (emailPattern.test(String(email))) {
        subscriber.next({emailTaken:true});
        subscriber.complete();
      }

      if (email === 'fernando@google.com') {
        subscriber.next({emailTaken:true});
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
      // return;
    }).pipe(
      delay(3000)
    )

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
