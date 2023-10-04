import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control mb-2"
      placeholder="Buscar gifs..."
      (keyup)="onKeyPress(txtTagInput.value)"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  constructor(private gifsService:GifsService){ }
  ngOnInit(): void {
    this.gifsService.quitGifsPage();
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300)
      )
      .subscribe(value => {
        this.searchTag(value);
        if (value === "")
          this.gifsService.quitGifsPage();
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  searchTag(value:string) {
    this.gifsService.searchTag(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
