/**
 * Created by boot on 8/6/17.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dashboard',
  templateUrl: '../views/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  countryCode:String;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        var code:String = params.get('code');
        return Promise.resolve(code);
      })
      .subscribe(code => {
        this.countryCode = code;
        console.log(`Country seleccionado: ${this.countryCode}`);
      });
  }
}
