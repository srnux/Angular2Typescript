System.register(["angular2/core", "./hero-detail.component", "./services/hero.service", "./hero-form.component"], function(exports_1) {
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
                        styles: ["\n    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n    .heroes .badge {\n      font-size: small;\n      color: white;\n      padding: 0.1em 0.7em;\n      background-color: #369;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -1px;\n    }\n    .selected { background-color: #EEE; color: #369; }\n  "],
                        directives: [hero_detail_component_1.HeroDetailComponent, hero_form_component_1.HeroFormComponent],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIZXJvQ29tcG9uZW50IiwiSGVyb0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhlcm9Db21wb25lbnQubmdPbkluaXQiLCJIZXJvQ29tcG9uZW50LmdldEhlcm9lcyIsIkhlcm9Db21wb25lbnQub25TZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQTRDSUEsdUJBQW9CQSxZQUF5QkE7b0JBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7b0JBUnRDQSxVQUFLQSxHQUFHQSxnQkFBZ0JBLENBQUNBO2dCQVFpQkEsQ0FBQ0E7Z0JBSmxERCxnQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBSURGLGlDQUFTQSxHQUFUQTtvQkFBQUcsaUJBRUNBO29CQURHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFFQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxvQ0FBb0NBO2dCQUN6R0EsQ0FBQ0E7Z0JBRURILGdDQUFRQSxHQUFSQSxVQUFTQSxJQUFVQSxJQUFJSSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFsRHRESjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLFFBQVFBLEVBQUVBLG9ZQVlYQTt3QkFDQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EscWhCQWVWQSxDQUFDQTt3QkFDQUEsVUFBVUEsRUFBRUEsQ0FBQ0EsMkNBQW1CQSxFQUFFQSx1Q0FBaUJBLENBQUNBO3dCQUNwREEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVdBLENBQUNBO3FCQUMzQkEsQ0FBQ0E7O2tDQWtCREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQW5EQSxBQW1EQ0EsSUFBQTtZQW5ERCx5Q0FtREMsQ0FBQSIsImZpbGUiOiJhcHAvaGVyby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0hlcm99IGZyb20gXCIuL2hlcm9cIjtcclxuaW1wb3J0IHtIZXJvRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9oZXJvLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIZXJvU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvaGVyby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SGVyb0Zvcm1Db21wb25lbnR9IGZyb20gXCIuL2hlcm8tZm9ybS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGVyby1hcHBcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aDE+e3t0aXRsZX19PC9oMT5cclxuICAgIDxoMj5NeSBIZXJvZXM8L2gyPlxyXG4gICAgPHVsIGNsYXNzPVwiaGVyb2VzXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCIjaGVybyBvZiBoZXJvZXNcIlxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJoZXJvID09PSBzZWxlY3RlZEhlcm9cIlxyXG4gICAgICAgIChjbGljayk9XCJvblNlbGVjdChoZXJvKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2hlcm8uaWR9fTwvc3Bhbj4ge3toZXJvLm5hbWV9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxteS1oZXJvLWRldGFpbCBbaGVyb109XCJzZWxlY3RlZEhlcm9cIj48L215LWhlcm8tZGV0YWlsPlxyXG4gICAgPGhlcm8tZm9ybT48L2hlcm8tZm9ybT5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgLmhlcm9lcyB7bGlzdC1zdHlsZS10eXBlOiBub25lOyBtYXJnaW4tbGVmdDogMWVtOyBwYWRkaW5nOiAwOyB3aWR0aDogMTBlbTt9XHJcbiAgICAuaGVyb2VzIGxpIHsgY3Vyc29yOiBwb2ludGVyOyBwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDA7IHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7IH1cclxuICAgIC5oZXJvZXMgbGk6aG92ZXIge2NvbG9yOiAjMzY5OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOyBsZWZ0OiAuMmVtO31cclxuICAgIC5oZXJvZXMgLmJhZGdlIHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAwLjFlbSAwLjdlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICB0b3A6IC0xcHg7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOyBjb2xvcjogIzM2OTsgfVxyXG4gIGBdLFxyXG4gICAgZGlyZWN0aXZlczogW0hlcm9EZXRhaWxDb21wb25lbnQsIEhlcm9Gb3JtQ29tcG9uZW50XSwvL2NoaWxkIGNvbXBvbmVudCBodG1sIHRhZ3Mgb3RoZXJ3aXNlIGFuZ3VsYXIgaWdub3JlcyB0YWdzXHJcbiAgICBwcm92aWRlcnM6IFtIZXJvU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHVibGljIHRpdGxlID0gXCJUb3VyIG9mIEhlcm9lc1wiO1xyXG4gICAgcHVibGljIGhlcm9lcyA7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0SGVyb2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRIZXJvZXMoKSB7XHJcbiAgICAgICAgdGhpcy5faGVyb1NlcnZpY2UuZ2V0SGVyb2VzU2xvd2x5KCkudGhlbiggaCA9PiB0aGlzLmhlcm9lcyA9IGgpOyAvL3Byb21pc2UgYW5kIGFycm93IChsYW1iZGEpIHN5bnRheCBcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChoZXJvOiBIZXJvKSB7IHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybzsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
