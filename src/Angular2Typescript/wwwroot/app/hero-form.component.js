System.register(["angular2/core", "./hero", './init-caps-pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1, init_caps_pipe_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (init_caps_pipe_1_1) {
                init_caps_pipe_1 = init_caps_pipe_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent() {
                    this.powers = ["Really Smart", "Super Flexible",
                        "Super Hot", "Weather Changer"];
                    this.model = new hero_1.Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");
                    this.submitted = false;
                }
                HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: "hero-form",
                        pipes: [init_caps_pipe_1.InitCapsPipe],
                        templateUrl: "templates/hero-form.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFormComponent);
                return HeroFormComponent;
            })();
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhlcm9Gb3JtQ29tcG9uZW50IiwiSGVyb0Zvcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJIZXJvRm9ybUNvbXBvbmVudC5vblN1Ym1pdCIsIkhlcm9Gb3JtQ29tcG9uZW50LmRpYWdub3N0aWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFNSUMsV0FBTUEsR0FBR0EsQ0FBQ0EsY0FBY0EsRUFBRUEsZ0JBQWdCQTt3QkFDdENBLFdBQVdBLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BDQSxVQUFLQSxHQUFHQSxJQUFJQSxXQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNsRUEsY0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBSXRCQSxDQUFDQTtnQkFIR0Qsb0NBQVFBLEdBQVJBLGNBQWFFLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUVyQ0Ysc0JBQUlBLHlDQUFVQTtvQkFEZEEsb0NBQW9DQTt5QkFDcENBLGNBQW1CRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs7O21CQUFBSDtnQkFaM0RBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsS0FBS0EsRUFBRUEsQ0FBQ0EsNkJBQVlBLENBQUNBO3dCQUNyQkEsV0FBV0EsRUFBRUEsb0NBQW9DQTtxQkFDcERBLENBQUNBOztzQ0FTREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCxpREFhQyxDQUFBIiwiZmlsZSI6ImFwcC9oZXJvLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImluaXQtY2Fwcy1waXBlLnRzXCIgLz5cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TmdGb3JtfSAgICBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEhlcm8gfSAgICBmcm9tIFwiLi9oZXJvXCI7XHJcbmltcG9ydCB7SW5pdENhcHNQaXBlfSBmcm9tICcuL2luaXQtY2Fwcy1waXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGVyby1mb3JtXCIsXHJcbiAgICBwaXBlczogW0luaXRDYXBzUGlwZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvaGVyby1mb3JtLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9Gb3JtQ29tcG9uZW50IHtcclxuICAgIHBvd2VycyA9IFtcIlJlYWxseSBTbWFydFwiLCBcIlN1cGVyIEZsZXhpYmxlXCIsXHJcbiAgICAgICAgXCJTdXBlciBIb3RcIiwgXCJXZWF0aGVyIENoYW5nZXJcIl07XHJcbiAgICBtb2RlbCA9IG5ldyBIZXJvKDE4LCBcIkRyIElRXCIsIHRoaXMucG93ZXJzWzBdLCBcIkNodWNrIE92ZXJzdHJlZXRcIik7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gd2UncmUgZG9uZVxyXG4gICAgZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKTsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
