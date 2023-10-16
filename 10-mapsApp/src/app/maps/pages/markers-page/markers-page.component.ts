import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}


@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map')
  divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

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

  createMarker() {

    if (! this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }


  addMarker(lngLat: LngLat, color: string) {
    if (! this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });
  }


  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index,1);
  }

}
