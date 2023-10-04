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
    if (sessionStorage.getItem('user')) {
      this.currentUser = JSON.parse(sessionStorage.getItem('user')!);
      this.openSession();
    }

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
  public closeSession():void {
    this.router.navigate([''], {relativeTo: this.activatedRoute});
    this.session = false;

    sessionStorage.removeItem('user');
    this.currentUser = undefined;
  }

  public openSession(): void {
    this.router.navigate(['/crud/mydata'], {relativeTo: this.activatedRoute});
    this.session = true;
  }

  public addFavGif(url: string): void{
    let user:User = this.currentUser!;
    user.favGifUrl = url;
    this.currentUser = user;

    sessionStorage.setItem('user', JSON.stringify(this.currentUser!));

    this.userList = this.filterUser(this.currentUser!);
    this.userList.push(this.currentUser);

    localStorage.setItem('users', JSON.stringify(this.userList))
  }

  // Filtering
  private filterUser(user:User) : User[]{
    let filteredList:User[] = this.userList.filter (
      u => u.id !== user.id
    );
    return filteredList;
  }
}
