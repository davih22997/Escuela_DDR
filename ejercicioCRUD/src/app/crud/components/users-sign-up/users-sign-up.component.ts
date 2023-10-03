import { Component, Injectable, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CreationState, User } from '../../interfaces/user.interface';
import {v4 as uuidv4} from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import * as crypto from 'crypto-js';

@Component({
  selector: 'crud-users-sign-up',
  templateUrl: './users-sign-up.component.html',
  styles: [
  ]
})

export class UsersSignUpComponent implements OnInit {
  // VARIABLES
  // Public variables
  public user:string = "";
  public password:string = "";
  public email:string = "";
  public creationState:CreationState = CreationState.WaitToCreate;

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
    if (this.usersService.getSession)
      this.usersService.openSession();

    this.userList = this.usersService.getUsers;
  }

  // Getters
  public get CreationState() {
    return CreationState;
  }

  // Other methods
  // Creation
  public onClickSubmit(data:any):void {
    let created = this.checkIfCanBeCreated(
      data.user,
      data.email,
      data.password
    );

    if (!created) {
      /*
       TODO: Distinguir entre no creado por datos mal
       y por datos duplicados
      */
      this.creationState = CreationState.NotCreated;
      return
    }

    this.user = data.user;
    this.email = data.email;
    this.password = crypto.SHA512(data.password).toString();

    this.createAccount();
  }

  private createAccount():void {
    let newAccount: User = <User> {
      id:           uuidv4(),
      email:        this.email,
      name:         this.user,
      password:     this.password,

      favGifUrl:    undefined
    }

    this.userList.push(newAccount);
    this.usersService.setUserList = this.userList;

    localStorage.setItem(
      'users',
      JSON.stringify(this.userList)
    );
    this.creationState = CreationState.Created;

    this.resetValues();
  }

  // Reset values
  private resetValues() {
    setTimeout(() => {
      this.email = '';
      this.user = '';
      this.password = '';

      this.formData = new FormGroup({
        email: new FormControl(""),
        user: new FormControl(""),
        password: new FormControl("")
      });
    }, 250)
  }

  // Data validation
  private checkIfCanBeCreated(user:string, email:string, password:string):boolean {
    let res:boolean = this.dataValidation(user, email, password);
    res = res && ! this.duplicatedData(user, email);

    return res;
  }

  private dataValidation(user:string, email:string, password:string):boolean {
    return this.validateUser(user) &&
    this.validateEmail(email) &&
    this.validatePasswd(password);
  }

  private validateEmail(email:string): boolean {
    const res: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
  }

  private validateUser(user:string): boolean {
    const res: RegExp = /(\_|[a-z])([1-9]|[a-z]|\_)*/;
    return res.test(String(user).toLowerCase());
  }

  private validatePasswd(password:string): boolean {
    return password.length >=4 ;
  }

  private duplicatedData(user:string, email:string):boolean {
    return this.userList.some(
      u =>
      u.name === user ||
      u.email === email
    );
  }

}
