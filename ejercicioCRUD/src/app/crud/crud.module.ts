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
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { HttpClientModule } from "@angular/common/http";
import { GifsService } from "../gifs/services/gifs.service";
import { GifsModule } from "../gifs/gifs.module";

@NgModule({
  declarations:[
    UsersTableComponent,
    UsersSignUpComponent,
    UsersSignInComponent,
    UsersInitialMenuComponent,
    UsersDataComponent,
    UsersGifsComponent,
    UpperCasePipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    GifsModule,
    HttpClientModule,
  ],
  exports: [
    UsersTableComponent,
    UsersInitialMenuComponent,
    UsersDataComponent
  ],
  providers: [
    GifsService
  ]
})

export class CrudModule {}
