import { Component } from '@angular/core';

@Component({
  selector: 'crud-users-initial-menu',
  templateUrl: './users-initial-menu.component.html',
  styleUrls: ['./users-initial-menu.component.css']
})
export class UsersInitialMenuComponent {
  // VARIABLES
  // Public variables
  public signIn:boolean= true;

  // METHODS
  // Changing selection
  public onChangeSelection(selection:boolean): void {
    this.signIn = selection;
  }
}
