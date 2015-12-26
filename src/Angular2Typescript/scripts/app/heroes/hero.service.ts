import {HEROES} from "./mock-heroes"
import {Injectable} from "angular2/core"

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);//get from web api
    }
    getHeroesSlowly() {
        return new Promise(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
    getHero(id: number | string) {
        return this.getHeroes()
            .then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}
