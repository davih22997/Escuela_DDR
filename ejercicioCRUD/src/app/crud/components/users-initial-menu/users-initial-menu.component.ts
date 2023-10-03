import { Component } from '@angular/core';

@Component({
  selector: 'crud-users-initial-menu',
  templateUrl: './users-initial-menu.component.html',
  styleUrls: ['./users-initial-menu.component.css']
})
export class UsersInitialMenuComponent {
  public signIn:boolean= true;

  public onChangeSelection(selection:boolean): void {
    this.signIn = selection;
  }
}
