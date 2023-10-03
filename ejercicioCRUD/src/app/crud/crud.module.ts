import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { UsersTableComponent } from "./components/users-table/users-table.component";
import { UsersSignUpComponent } from './components/users-sign-up/users-sign-up.component';
import { UsersSignInComponent } from './components/users-sign-in/users-sign-in.component';
import { UsersInitialMenuComponent } from './components/users-initial-menu/users-initial-menu.component';
import { CrudRoutingModule } from "./crud-routing.module";
import { UsersDataComponent } from './components/users-data/users-data.component';
import { UsersGifsComponent } from './components/users-gifs/users-gifs.component';
import { UsersSettingsComponent } from './components/users-settings/users-settings.component';

@NgModule({
  declarations:[
    UsersTableComponent,
    UsersSignUpComponent,
    UsersSignInComponent,
    UsersInitialMenuComponent,
    UsersDataComponent,
    UsersGifsComponent,
    UsersSettingsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CrudRoutingModule
  ],
  exports: [
    UsersTableComponent,
    UsersInitialMenuComponent,
    UsersDataComponent
  ],
  providers: [
  ]
})

export class CrudModule {}
