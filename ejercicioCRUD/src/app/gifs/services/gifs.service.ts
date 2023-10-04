import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { UsersService } from 'src/app/crud/services/users.service';

// const GIPHY_API_KEY = "4XvatTfT1gmoROr2wm8i68pLTJnyE6D3";

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey: string = "4XvatTfT1gmoROr2wm8i68pLTJnyE6D3";
  private _serviceUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(
    private userService: UsersService,
    private http:HttpClient
  ) {
    // this.loadLocalStorage();
    // console.log('Gifs service loaded')
    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);


  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag))
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag)

      this._tagsHistory.unshift(tag);
      this._tagsHistory = this._tagsHistory.splice(0,10);
      // this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void {
    if (! localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  // async searchTag(tag: string):Promise<void> {
  searchTag(tag: string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this._serviceUrl}/search`, {params: params})
      .subscribe(resp => {

        this.gifList = resp.data;
        // console.log({gifs:this.gifList});
      });

  }

  addFavGif(url: string) {
    this.userService.addFavGif(url);
  }

}
