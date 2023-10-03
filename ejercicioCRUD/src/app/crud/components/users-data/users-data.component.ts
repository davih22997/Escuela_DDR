import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: []
})
export class UsersDataComponent implements OnInit {
  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {
  }

}
