System.register(["angular2/core", "./hero-detail.component", "./hero.service", "./hero-form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1, hero_form_component_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = "Tour of Heroes";
                }
                HeroComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroesSlowly().then(function (h) { return _this.heroes = h; }); //promise and arrow (lambda) syntax 
                };
                HeroComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroComponent = __decorate([
                    core_1.Component({
                        selector: "hero-app",
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    <hero-form></hero-form>\n  ",
                        //  styles: [`
                        //  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
                        //  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
                        //  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
                        //  .heroes .badge {
                        //    font-size: small;
                        //    color: white;
                        //    padding: 0.1em 0.7em;
                        //    background-color: #369;
                        //    line-height: 1em;
                        //    position: relative;
                        //    left: -1px;
                        //    top: -1px;
                        //  }
                        //  .selected { background-color: #EEE; color: #369; }
                        //`],
                        directives: [hero_detail_component_1.HeroDetailComponent, hero_form_component_1.HeroFormComponent],
                        //providers: [HeroService]
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
