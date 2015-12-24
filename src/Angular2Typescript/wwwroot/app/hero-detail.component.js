System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: "my-hero-detail",
                        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
                        inputs: ["hero"] //pass a hero from parent
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSGVyb0RldGFpbENvbXBvbmVudCIsIkhlcm9EZXRhaWxDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkFnQkFDLENBQUNBO2dCQWhCREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFFBQVFBLEVBQUVBLCtQQVNYQTt3QkFDQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUEseUJBQXlCQTtxQkFDNUNBLENBQUNBOzt3Q0FHREE7Z0JBQURBLDBCQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQWhCRCxxREFnQkMsQ0FBQSIsImZpbGUiOiJhcHAvaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hlcm99IGZyb20gXCIuL2hlcm9cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktaGVyby1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJoZXJvXCI+XG4gICAgICA8aDI+e3toZXJvLm5hbWV9fSBkZXRhaWxzITwvaDI+XG4gICAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e2hlcm8uaWR9fTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPm5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImhlcm8ubmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICAgIGlucHV0czogW1wiaGVyb1wiXS8vcGFzcyBhIGhlcm8gZnJvbSBwYXJlbnRcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCB7XG4gICAgcHVibGljIGhlcm86IEhlcm87XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
