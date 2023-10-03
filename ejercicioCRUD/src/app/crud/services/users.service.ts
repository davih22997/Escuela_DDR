import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';


@Injectable({providedIn: 'root'})
export class UsersService {

  public userList: User[] = [];

  constructor() {
    if (!localStorage.getItem('users')) return;

    this.userList = JSON.parse(localStorage.getItem('users')!);
  }

  getUsers():User[] {
    return this.userList;
  }

}
