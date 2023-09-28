import { Injectable } from '@angular/core';

// const GIPHY_API_KEY = "4XvatTfT1gmoROr2wm8i68pLTJnyE6D3";

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private _apiKey: string = "4XvatTfT1gmoROr2wm8i68pLTJnyE6D3";

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag))
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag)

      this._tagsHistory.unshift(tag);
      this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  searchTag(tag: string):void {
    if (tag.length === 0)
      return;

    this.organizeHistory(tag);
  }

}
