import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule( {
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    UsersTableComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    UsersTableComponent
  ],
  providers: []
})

export class SharedModule {}
