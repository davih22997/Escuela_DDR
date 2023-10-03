import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersTableComponent } from "./components/users-table/users-table.component";
import { UsersInitialMenuComponent } from "./components/users-initial-menu/users-initial-menu.component";
import { UsersDataComponent } from "./components/users-data/users-data.component";
import { UsersGifsComponent } from "./components/users-gifs/users-gifs.component";
import { UsersSettingsComponent } from "./components/users-settings/users-settings.component";

const routes:Routes = [
  {
    path: 'home',
    component: UsersInitialMenuComponent
  },
  {
    path: 'tables',
    component: UsersTableComponent
  },
  {
    path: 'mydata',
    component: UsersDataComponent
  },
  {
    path:'gifs',
    component: UsersGifsComponent
  },
  {
    path: 'settings',
    component: UsersSettingsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class CrudRoutingModule {}
