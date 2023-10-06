import { Component, OnInit, Output, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'crud-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  styles: [
  ],
})
export class UsersTableComponent implements OnInit{

  // VARIABLES
  // Public variables
  public userList: User[] = [];

  // METHODS
  // Constructor & initialization
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router:Router
  ) {}


  ngOnInit(): void {
    this.userList = this.usersService.getUsers;
  }

  // Getters
  get getOtherUsers():User[] {
    let otherList:User[] = this.filterUser(this.usersService.getCurrentUser!);

    return otherList;
  }

  // Deletions
  public deleteUser(user: User) {

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

        this.userList = this.filterUser(user);
        this.usersService.setUserList = this.userList;
        localStorage.setItem('users', JSON.stringify(this.userList));

      } else if (
        /* Read more about handling dismissals below */
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

  // Other functions
  chargeLink(link: string | undefined) {
    if (link)
      window.open(link);
  }

  private filterUser(user:User) : User[]{
    let filteredList:User[] = this.userList.filter (
      u => u.id !== user.id
    );
    return filteredList;
  }



}
