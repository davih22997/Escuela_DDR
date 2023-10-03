import { Component, OnInit, Output, NgModule } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'crud-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  styles: [
  ],
})
export class UsersTableComponent {

  public signIn:boolean= true;

  public onChangeSelection(selection:boolean): void {
    this.signIn = selection;
  }

}
