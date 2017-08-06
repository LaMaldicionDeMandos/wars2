/**
 * Created by boot on 8/6/17.
 */
import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {}
