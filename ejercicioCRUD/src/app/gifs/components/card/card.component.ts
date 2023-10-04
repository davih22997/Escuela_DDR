import { Component, Input, OnInit } from '@angular/core';
import { Gif, User } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {


  constructor(private gifService: GifsService) {}
  @Input()
  public gif!: Gif;

  @Input()
  public currentUser!: User;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }

  addFavGif(url:string) {
    this.gifService.addFavGif(url);
  }

}
