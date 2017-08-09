/**
 * Created by boot on 8/6/17.
 */
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import {Country} from "../models/country";

@Component({
  selector: 'intro',
  templateUrl: '../views/intro.component.html',
  styleUrls: ['../styles/intro.component.css'],
})
export class IntroComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAll().then((countries) => this.countries = countries);
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }
}
