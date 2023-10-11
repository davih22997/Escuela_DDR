
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      // TODO: Comprobar email en BBDD

      console.log({email})

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