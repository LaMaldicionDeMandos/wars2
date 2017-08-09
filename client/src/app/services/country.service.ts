/**
 * Created by boot on 8/6/17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import {Country} from "../models/country";

@Injectable()
export class CountryService {
  private heroesUrl = environment.base_url + 'country';

  constructor(private http: Http) { }

  getAll(): Promise<Country[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        var countries = response.json() as Country[];
        return countries;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
