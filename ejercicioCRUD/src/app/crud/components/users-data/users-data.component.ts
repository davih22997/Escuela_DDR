import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'crud-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: [
    './users-data.component.css'
  ]
})
export class UsersDataComponent implements OnInit {

  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {
  }

  // Getters
  get currentUser():User {
    return this.usersService.getCurrentUser!;
  }

  // Other function
  chargeLink(link: string | undefined) {
    if (link)
      window.open(link);
  }

  deleteAccount() {
    let swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "El usuario se borrará permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'El usuario se ha eliminado',
          'success'
        )

        this.usersService.setUserList =
          this.filterUser(this.usersService.getCurrentUser!);
        localStorage.setItem('users', JSON.stringify(this.usersService.getUsers));
        this.usersService.closeSession();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Conservas el usuario',
          'error'
        )
      }
    })

  }

  // Filtering
  private filterUser(user:User) : User[]{
    let filteredList:User[] = this.usersService.getUsers.filter (
      u => u.id !== user.id
    );
    return filteredList;
  }
}
