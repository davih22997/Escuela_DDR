import { Component, OnInit, Output, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'crud-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  styles: [
  ],
})
export class UsersTableComponent implements OnInit{

  // VARIABLES
  // Public variables
  public userList: User[] = [];

  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}


  ngOnInit(): void {
    this.userList = this.usersService.getUsers;
  }


}
