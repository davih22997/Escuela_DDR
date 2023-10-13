import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import * as crypto from 'crypto-js';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ],
  styleUrls: [
    './login-page.component.css'
  ]
})
export class LoginPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    user: [''],
    password: ['']
  })

  public incorrectUser:boolean = false;
  public incorrectPasswd:boolean = false;

  private users: User[] = [];

  constructor(
    private authService:AuthService,
    private router: Router,
    private fb:FormBuilder,
    private uService: UsersService
  ) {}

  ngOnInit(): void {
    this.uService.getUsers()
      .subscribe(users => this.users = users);
  }

  onLogin(): void{
    this.incorrectUser = false;
    this.incorrectPasswd = false;

    const user:User|null = this.getUser();

    this.incorrectUser = !user;
    this.incorrectPasswd = !this.checkPassword(user);

    if (this.incorrectUser || this.incorrectPasswd) {
      console.log("Usuario incorrecto")
      return;
    }

    console.log("Usuario correcto")

    this.login(user!);
  }

  private getUser():User | null {
    const data :string = this.myForm.get('user')!.value;

    const user =  this.users.
          filter(
            user => user.id == data || user.email == data
          )[0];

    console.log(user);

    return user;
  }

  private checkPassword(user:User | null):boolean {
    if (!user)
      return false;
    const passwd:string = crypto.SHA512(this.myForm.get('password')!.value).toString();
    return user.password === passwd;
  }

  private login(user:User) {
    this.authService.login(user);
    this.router.navigate(['/content'])
  }


}
