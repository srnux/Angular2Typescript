System.register(["angular2/core", "./init-caps-pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, init_caps_pipe_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (init_caps_pipe_1_1) {
                init_caps_pipe_1 = init_caps_pipe_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: "my-hero-detail",
                        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name  | initCaps}} is {{userName}}'s current super hero!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
                        inputs: ["hero"],
                        pipes: [init_caps_pipe_1.InitCapsPipe] //register pipe
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSGVyb0RldGFpbENvbXBvbmVudCIsIkhlcm9EZXRhaWxDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtnQkFpQkFDLENBQUNBO2dCQWpCREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFFBQVFBLEVBQUVBLHdTQVNYQTt3QkFDQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7d0JBQ2hCQSxLQUFLQSxFQUFFQSxDQUFDQSw2QkFBWUEsQ0FBQ0EsQ0FBQ0EsZUFBZUE7cUJBQ3hDQSxDQUFDQTs7d0NBR0RBO2dCQUFEQSwwQkFBQ0E7WUFBREEsQ0FqQkEsQUFpQkNBLElBQUE7WUFqQkQscURBaUJDLENBQUEiLCJmaWxlIjoiYXBwL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi9oZXJvXCI7XG5pbXBvcnQge0luaXRDYXBzUGlwZX0gZnJvbSBcIi4vaW5pdC1jYXBzLXBpcGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktaGVyby1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJoZXJvXCI+XG4gICAgICA8aDI+e3toZXJvLm5hbWUgIHwgaW5pdENhcHN9fSBpcyB7e3VzZXJOYW1lfX0ncyBjdXJyZW50IHN1cGVyIGhlcm8hPC9oMj5cbiAgICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7aGVyby5pZH19PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+bmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaGVyby5uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgaW5wdXRzOiBbXCJoZXJvXCJdLC8vcGFzcyBhIGhlcm8gZnJvbSBwYXJlbnRcbiAgICBwaXBlczogW0luaXRDYXBzUGlwZV0gLy9yZWdpc3RlciBwaXBlXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9EZXRhaWxDb21wb25lbnQge1xuICAgIHB1YmxpYyBoZXJvOiBIZXJvO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
