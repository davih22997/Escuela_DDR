import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path:'gifs',
  },
  {
    path:'settings'
  },
  {
    path: '*',
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
