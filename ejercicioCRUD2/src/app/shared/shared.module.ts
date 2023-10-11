import { NgModule } from "@angular/core";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";
import { UsersService } from "../auth/services/users.service";

@NgModule({
  declarations: [
    Error404PageComponent,
  ],
  imports: [],
  exports: [
    Error404PageComponent,
  ],
  providers: [
    UsersService
  ]
})

export class SharedModule {}

