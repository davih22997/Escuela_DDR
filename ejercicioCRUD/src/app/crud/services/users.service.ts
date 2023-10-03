import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class UsersService {

  // VARIABLES
  // Public variables
  private userList: User[] = [];
  private currentUser?:User;
  private session:boolean = false;

  // METHODS
  // Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (!localStorage.getItem('users')) return;

    this.userList = JSON.parse(localStorage.getItem('users')!);
  }

  // Getters
  get getUsers():User[] {
    return this.userList;
  }

  get getCurrentUser() {
    return this.currentUser;
  }

  get getSession():boolean {
    return this.session;
  }

  // Setters
  set setUserList(users:User[]) {
    this.userList = users;
  }

  set setCurrentUser(user:User) {
    this.currentUser = user;
  }


  // Other methods
  closeSession():void {
    this.router.navigate([''], {relativeTo: this.activatedRoute});
    this.session = false;
    this.currentUser = undefined;
  }

  openSession(): void {
    this.router.navigate(['/crud/tables'], {relativeTo: this.activatedRoute});
    this.session = true;
  }
  public chargeSession() {
  }

  public exitSession() {
  }

}
