import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map')
  divMap?: ElementRef;

  public map?: Map;
  // public currentLngLat: LngLat = new LngLat(-74.5, 40)
  public currentLngLat: LngLat = new LngLat(-66.90898892333702, 10.528248850305616)

  ngAfterViewInit() {

    if (!this.divMap) throw "El elemento HTML no fue encontrado";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Fernando Herrera';

    // const marker = new Marker({
    //   // color: 'red'
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);

  }
}
