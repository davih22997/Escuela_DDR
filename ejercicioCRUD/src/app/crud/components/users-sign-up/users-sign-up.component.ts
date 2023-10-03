import { Component, Injectable, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import {v4 as uuidv4} from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'crud-users-sign-up',
  templateUrl: './users-sign-up.component.html',
  styles: [
  ]
})

@Injectable({providedIn: 'root'})
export class UsersSignUpComponent implements OnInit {
  // VARIABLES
  // Public variables
  public user:string = "";
  public password:string = "";
  public email:string = "";
  public created:boolean = true;

  public formData:FormGroup = new FormGroup({
    email: new FormControl(""),
    user: new FormControl(""),
    password: new FormControl("")
  });

  // Private variables
  private userList:User[] = [];

  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.userList = this.usersService.getUsers();
  }

  // Other methods

  // Creation
  public onClickSubmit(data:any):void {
    this.user = data.user;
    this.password = data.password;
    this.email = data.email;

    this.created = this.checkIfCreated();

    if (!this.created) {
      console.log("No se ha podido crear usuario")
      return
    }

    this.createAccount();
  }

  private createAccount():void {
    let newAccount: User = <User> {
      id:           uuidv4(),
      email:        this.email,
      name:         this.user,
      password:     this.password,

      favGif:         undefined
    }

    this.userList.push(newAccount);
    this.usersService.userList = this.userList;

    localStorage.setItem(
      'users',
      JSON.stringify(this.userList)
    );

  }

  // Data validation
  private checkIfCreated():boolean {
    let res: boolean =
      this.validateEmail() &&
      this.validateUser() &&
      this.validatePasswd();

    return res;
  }

  private validateEmail(): boolean {
    const res: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(this.email).toLowerCase());
  }

  private validateUser(): boolean {
    const res: RegExp = /(\_|[a-z])([1-9]|[a-z]|\_)*/;
    return res.test(String(this.user).toLowerCase());
  }

  private validatePasswd(): boolean {
    return this.password.length >=4 ;
  }

}
