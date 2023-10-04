import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule( {
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
    LoadingSpinnerComponent
  ],
  providers: []
})

export class SharedModule {}
