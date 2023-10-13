import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MaterialModule
  ],
  exports: [
    ListPageComponent,
    LayoutPageComponent,
  ]
})
export class ContentModule { }
