import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/crud/services/users.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(
    private usersService:UsersService
  ) {}

  ngOnInit(): void {
    if (!this.usersService.getSession)
      this.closeSesion();
  }

  public closeSesion() {
    this.usersService.closeSession();
  }
}
