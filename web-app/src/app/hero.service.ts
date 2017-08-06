/**
 * Created by boot on 8/6/17.
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'Goku'},
  {id: 2, name: 'Vegeta'}
];

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
