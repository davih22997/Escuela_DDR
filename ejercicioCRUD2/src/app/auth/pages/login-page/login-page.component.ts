import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ],
  styleUrls: [
    './login-page.component.css'
  ]
})
export class LoginPageComponent {

  constructor(
    // private authService:AuthService,
    private router: Router
  ) {}

  onLogin(): void{
    console.log("logueado");
    /* TODO:
    1. Comprobar nick / email
    2. Comprobar contraseña

    Si todo OK -> Logear
    */


    // this.authService.login('fernando@gmail.com', '123456')
    //   .subscribe(user => {

    //     this.router.navigate(['/']);

    //   });
  }
}
