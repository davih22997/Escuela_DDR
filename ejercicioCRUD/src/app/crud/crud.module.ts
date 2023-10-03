import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { UsersTableComponent } from "./components/users-table/users-table.component";
import { UsersSignUpComponent } from './components/users-sign-up/users-sign-up.component';
import { UsersSignInComponent } from './components/users-sign-in/users-sign-in.component';

@NgModule({
  declarations:[
    UsersTableComponent,
    UsersSignUpComponent,
    UsersSignInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersTableComponent
  ],
  providers: []
})

export class CrudModule {}
