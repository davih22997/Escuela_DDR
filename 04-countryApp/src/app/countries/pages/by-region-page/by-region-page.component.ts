import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;

    if (this.selectedRegion)
      this.searchByRegion(this.selectedRegion);
  }

  searchByRegion(region: Region):void {

    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
