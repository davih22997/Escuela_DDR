import { Component, OnInit, Output, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  styles: [
  ],
})
export class UsersTableComponent {

  @Output()
  public example:string = "Pepe";

  public formData:FormGroup = new FormGroup({
    email: new FormControl(""),
    user: new FormControl(""),
    password: new FormControl("")
 });;
  public user:string = "";
  public password:string = "";
  public email:string = "";

  public selected:string= "Sign in"

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(data:any) {
    this.user = data.user;
    this.password = data.password;
    this.email = data.email;
  }

}
