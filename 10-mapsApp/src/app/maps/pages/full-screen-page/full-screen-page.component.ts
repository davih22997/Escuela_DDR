import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZGF2aWQtZGRyIiwiYSI6ImNsbm9qMGUzZzBqbG8ycW9jcDNneDAxNXYifQ.BWQzu_PRM_psVHDrDbXtHg';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

ngAfterViewInit() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    });
}



}
