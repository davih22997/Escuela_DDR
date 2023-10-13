import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'content-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ],
  styleUrls: []
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label: 'Listado',
      icon:'label',
      url: './list'
    },
    {
      label: 'Buscar',
      icon:'search',
      url: './search'
    },
  ]

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get user():User|undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
