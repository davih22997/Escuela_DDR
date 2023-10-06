import { Component, Input, OnInit } from '@angular/core';
import { Gif, User } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css'
  ]
})
export class CardComponent implements OnInit {

  // VARIABLES

  // Public variables
  @Input()
  public gif!: Gif;

  @Input()
  public currentUser!: User;

  // METHODS
  // Constructor & initialization
  constructor(private gifService: GifsService) {}

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }

  // Other methods
  addFavGif(url:string):void {
    if (this.gifService.addFavGif(url)) {
      Swal.fire({
        title: 'Gif añadido a favoritos',
        text: 'Se ha añadido el Gif como favorito',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    } else {
      Swal.fire({
        title: 'Gif no añadido',
        text: 'Este gif ya estaba como favorito',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }
  }

}
