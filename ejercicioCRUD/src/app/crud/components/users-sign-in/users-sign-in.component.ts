import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import * as crypto from 'crypto-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'crud-users-sign-in',
  templateUrl: './users-sign-in.component.html',
  styles: [
  ]
})

export class UsersSignInComponent {
  // VARIABLES
  // Public variables
  public input:string = "";
  public password:string = "";
  public isLoading:boolean = false;

  public formData:FormGroup = new FormGroup({
    input: new FormControl(""),
    password: new FormControl("")
  });

  // Private variables
  private userList : User[] = [];
  private user?:User;

  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {
    if (this.usersService.getSession)
      this.usersService.openSession();

    this.userList = this.usersService.getUsers;
  }

  // Other methods
  // Submit
  public onClickSubmit(data: any):void {
    let res: boolean = this.checkInputs(data.input, data.password)

    if (!res) {
      this.user = undefined;

      Swal.fire({
        title: 'Fallo en inicio de sesión',
        text: 'Introduce datos correctos para iniciar sesión',
        icon: 'error',
        confirmButtonText: 'OK'
      })

      return;
    }

    this.openSession();
  }

  // Navigation
  private openSession() {
    this.isLoading = true;

    Swal.fire({
      title: 'Sesión iniciada correctamente',
      text: 'Va a cargarse su sesión',
      icon: 'success',
      confirmButtonText: 'OK'
    })

    setTimeout(() => {
      this.usersService.setCurrentUser = this.user!;
      sessionStorage.setItem(
        'user',
        JSON.stringify(this.user)
      );
      this.usersService.openSession();
      this.isLoading = false;
    }, 5000);
  }

  // Validation
  private checkInputs(input:string, password:string) :boolean {
    let res: boolean = this.checkUser(input);
    res &&= this.checkPassword(password);

    return res;
  }

  private checkUser (input:string) :boolean{
    this.user = this.userList.filter (
      u => u.email === input || u.name === input
    )[0];

    return this.user != null;
  }

  private checkPassword(password:string) :boolean{
    let pasw = crypto.SHA512(password).toString();

    return this.user?.password === pasw;
  }

}
