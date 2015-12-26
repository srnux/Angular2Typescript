import {Component} from "angular2/core";
import {IHero} from "./hero";
import {HeroService}   from './hero.service';
import {InitCapsPipe} from "../init-caps-pipe";
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: "my-hero-detail",
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name  | initCaps}} is {{userName}}'s current super hero!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>Hero Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="gotoHeroes()">Back</button>
    </div>
  `,
    inputs: ["hero"],//pass a hero from parent
    pipes: [InitCapsPipe] //register pipe
})
export class HeroDetailComponent {
    public hero: IHero;
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: HeroService) { }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => this.hero = hero);
    }

    gotoHeroes() {
        // <a [routerLink]="['Heroes']">Heroes</a>
        this._router.navigate(['Heroes']);
    }
}