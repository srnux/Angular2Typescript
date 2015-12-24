import {Component} from "angular2/core";
import {Hero} from "./hero";
import {InitCapsPipe} from "./init-caps-pipe";

@Component({
    selector: "my-hero-detail",
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name  | initCaps}} is {{userName}}'s current super hero!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
    inputs: ["hero"],//pass a hero from parent
    pipes: [InitCapsPipe] //register pipe
})
export class HeroDetailComponent {
    public hero: Hero;
}