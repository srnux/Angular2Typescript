/// <reference path="init-caps-pipe.ts" />
import {Component} from "angular2/core";
import {NgForm}    from "angular2/common";
import { Hero }    from "./hero";
import {InitCapsPipe} from './init-caps-pipe';

@Component({
    selector: "hero-form",
    pipes: [InitCapsPipe],
    templateUrl: "templates/hero-form.component.html"
})
export class HeroFormComponent {
    powers = ["Really Smart", "Super Flexible",
        "Super Hot", "Weather Changer"];
    model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}