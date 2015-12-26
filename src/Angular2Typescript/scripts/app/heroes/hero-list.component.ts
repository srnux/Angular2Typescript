
// TODO SOMEDAY: Feature Componetized like HeroCenter
import {Component, OnInit}   from 'angular2/core';
import {Hero} from "./hero"
import {HeroService}   from './hero.service';
import {Router} from 'angular2/router';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul>
      <li *ngFor="#hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
  //public heroes: Hero[];
    public heroes;
    public selectedHero: Hero;

  constructor(
    private _router: Router,
    private _service: HeroService) { }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
  onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }
}

/* A link parameters array
['HeroDetail', { id: hero.id }] // {id: 15}
*/