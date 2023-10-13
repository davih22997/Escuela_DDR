import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { UsersService } from 'src/app/auth/services/users.service';
import { AuthService } from '../../../auth/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit{

  public users: User[] = [];
  public displayedColumns: string[] = []

  constructor(
    private uService: UsersService,
    private authService:AuthService,
  ) {}

  ngOnInit(): void {
    this.uService.getUsers()
      .subscribe(users => this.users = users.filter(
        user => user.id !== this.currentUser?.id
      ));

      this.displayedColumns = [
        'nick',
        'name',
        'surname',
        'email',
        'action'
      ]
  }

  get currentUser(): User | null {
    return this.authService.currentUser!;
  }

  quitUserAdmin(user:User): void {
    console.log("quito admin")
    const index = this.users.indexOf(user);
    this.users[index].admin = false;
    this.uService.updateUser(this.users[index]).subscribe();
  }

  giveUserAdmin(user:User): void {
    console.log("doy admin")
    const index = this.users.indexOf(user);
    this.users[index].admin = true;
    this.uService.updateUser(this.users[index]).subscribe();
  }

  deleteUser(user:User): void {
    Swal.fire({
      title: '¿Seguro que quieres borrar al usuario de la BBDD?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Usuario eliminado', '', 'info')
        this.uService.deleteUser(user)
          .subscribe();
        this.users = this.users.filter(u => u.id !== user.id)
      }
    })
  }



}
