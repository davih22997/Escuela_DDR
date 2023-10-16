import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styles: [
  ]
})
export class PropertiesPageComponent {

  public user = signal<User>({
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  })

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`)


  onFieldUpdated(field: string, value: string) {

    // this.user.set({
    //   ...this.user(),
    //   [field]:value,
    // })

    this.user.update(current => {
      return {
        ...current,
        [field]: value
      }
    })

    // console.log({field, value})

    // this.user.mutate(current => {
    //   switch(field) {
    //     case 'email':
    //       current.email = value;
    //     break;

    //     case 'first_name':
    //       current.first_name = value;
    //     break;

    //     case 'last_name':
    //       current.last_name = value;
    //     break;

    //     case 'id':
    //       current.id = Number(value);
    //     break;

    //   }
    // });

  }

}
