import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../styles/app.component.css'],
  providers: [CountryService]
})
export class AppComponent {}
