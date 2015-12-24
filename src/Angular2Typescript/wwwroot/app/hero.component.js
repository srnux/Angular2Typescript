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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIZXJvQ29tcG9uZW50IiwiSGVyb0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhlcm9Db21wb25lbnQubmdPbkluaXQiLCJIZXJvQ29tcG9uZW50LmdldEhlcm9lcyIsIkhlcm9Db21wb25lbnQub25TZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQTZDSUEsdUJBQW9CQSxZQUF5QkE7b0JBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7b0JBUnRDQSxVQUFLQSxHQUFHQSxnQkFBZ0JBLENBQUNBO2dCQVFpQkEsQ0FBQ0E7Z0JBSmxERCxnQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBSURGLGlDQUFTQSxHQUFUQTtvQkFBQUcsaUJBRUNBO29CQURHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFFQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxvQ0FBb0NBO2dCQUN6R0EsQ0FBQ0E7Z0JBRURILGdDQUFRQSxHQUFSQSxVQUFTQSxJQUFVQSxJQUFJSSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFuRHRESjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLFFBQVFBLEVBQUVBLG9ZQVlYQTt3QkFDQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EscWhCQWVWQSxDQUFDQTt3QkFDQUEsVUFBVUEsRUFBRUEsQ0FBQ0EsMkNBQW1CQSxFQUFFQSx1Q0FBaUJBLENBQUNBO3dCQUNwREEsMEJBQTBCQTt3QkFDMUJBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUFXQSxDQUFDQTtxQkFDM0JBLENBQUNBOztrQ0FrQkRBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FwREEsQUFvRENBLElBQUE7WUFwREQseUNBb0RDLENBQUEiLCJmaWxlIjoiYXBwL2hlcm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi9oZXJvXCI7XHJcbmltcG9ydCB7SGVyb0RldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vaGVyby1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SGVyb1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2hlcm8uc2VydmljZVwiO1xyXG5pbXBvcnQge0hlcm9Gb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9oZXJvLWZvcm0uY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoZXJvLWFwcFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT57e3RpdGxlfX08L2gxPlxyXG4gICAgPGgyPk15IEhlcm9lczwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJoZXJvZXNcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cIiNoZXJvIG9mIGhlcm9lc1wiXHJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImhlcm8gPT09IHNlbGVjdGVkSGVyb1wiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7aGVyby5pZH19PC9zcGFuPiB7e2hlcm8ubmFtZX19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPG15LWhlcm8tZGV0YWlsIFtoZXJvXT1cInNlbGVjdGVkSGVyb1wiPjwvbXktaGVyby1kZXRhaWw+XHJcbiAgICA8aGVyby1mb3JtPjwvaGVyby1mb3JtPlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAuaGVyb2VzIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IG1hcmdpbi1sZWZ0OiAxZW07IHBhZGRpbmc6IDA7IHdpZHRoOiAxMGVtO31cclxuICAgIC5oZXJvZXMgbGkgeyBjdXJzb3I6IHBvaW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMDsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgfVxyXG4gICAgLmhlcm9lcyBsaTpob3ZlciB7Y29sb3I6ICMzNjk7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7IGxlZnQ6IC4yZW07fVxyXG4gICAgLmhlcm9lcyAuYmFkZ2Uge1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuMWVtIDAuN2VtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5O1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgIHRvcDogLTFweDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7IGNvbG9yOiAjMzY5OyB9XHJcbiAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVyb0RldGFpbENvbXBvbmVudCwgSGVyb0Zvcm1Db21wb25lbnRdLC8vY2hpbGQgY29tcG9uZW50IGh0bWwgdGFncyBvdGhlcndpc2UgYW5ndWxhciBpZ25vcmVzIHRhZ3NcclxuICAgIC8vcHJvdmlkZXJzOiBbSGVyb1NlcnZpY2VdXHJcbiAgICBwcm92aWRlcnM6IFtIZXJvU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHVibGljIHRpdGxlID0gXCJUb3VyIG9mIEhlcm9lc1wiO1xyXG4gICAgcHVibGljIGhlcm9lcyA7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0SGVyb2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRIZXJvZXMoKSB7XHJcbiAgICAgICAgdGhpcy5faGVyb1NlcnZpY2UuZ2V0SGVyb2VzU2xvd2x5KCkudGhlbiggaCA9PiB0aGlzLmhlcm9lcyA9IGgpOyAvL3Byb21pc2UgYW5kIGFycm93IChsYW1iZGEpIHN5bnRheCBcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChoZXJvOiBIZXJvKSB7IHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybzsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
