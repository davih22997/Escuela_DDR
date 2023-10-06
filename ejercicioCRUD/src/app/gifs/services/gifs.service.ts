import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { UsersService } from 'src/app/crud/services/users.service';

@Injectable({providedIn: 'root'})
export class GifsService {

  // VARIABLES
  // Public variables
  public gifList: Gif[] = [];

  // Private variables
  private _apiKey: string = "4XvatTfT1gmoROr2wm8i68pLTJnyE6D3";
  private _serviceUrl: string = "https://api.giphy.com/v1/gifs";


  // METHODS
  // Constructor
  constructor(
    private userService: UsersService,
    private http:HttpClient
  ) {  }

  // Data functions
  searchTag(tag: string):void {
    if (tag.length === 0) return;
    tag = tag.toLowerCase();

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this._serviceUrl}/search`, {params: params})
      .subscribe(resp => {

        this.gifList = resp.data;
      });

  }

  addFavGif(url: string) :boolean {
    return this.userService.addFavGif(url);
  }

  public quitGifsPage() {
    this.gifList = [];
  }

}
