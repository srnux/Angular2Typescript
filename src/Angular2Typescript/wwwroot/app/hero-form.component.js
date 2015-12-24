System.register(["angular2/core", "./hero"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZXJvLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhlcm9Gb3JtQ29tcG9uZW50IiwiSGVyb0Zvcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJIZXJvRm9ybUNvbXBvbmVudC5vblN1Ym1pdCIsIkhlcm9Gb3JtQ29tcG9uZW50LmRpYWdub3N0aWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtvQkFLSUMsV0FBTUEsR0FBR0EsQ0FBQ0EsY0FBY0EsRUFBRUEsZ0JBQWdCQTt3QkFDdENBLFdBQVdBLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BDQSxVQUFLQSxHQUFHQSxJQUFJQSxXQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNsRUEsY0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBSXRCQSxDQUFDQTtnQkFIR0Qsb0NBQVFBLEdBQVJBLGNBQWFFLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUVyQ0Ysc0JBQUlBLHlDQUFVQTtvQkFEZEEsb0NBQW9DQTt5QkFDcENBLGNBQW1CRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs7O21CQUFBSDtnQkFYM0RBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsV0FBV0EsRUFBRUEsb0NBQW9DQTtxQkFDcERBLENBQUNBOztzQ0FTREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQVpBLEFBWUNBLElBQUE7WUFaRCxpREFZQyxDQUFBIiwiZmlsZSI6ImFwcC9oZXJvLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TmdGb3JtfSAgICBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEhlcm8gfSAgICBmcm9tIFwiLi9oZXJvXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhlcm8tZm9ybVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL2hlcm8tZm9ybS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvRm9ybUNvbXBvbmVudCB7XHJcbiAgICBwb3dlcnMgPSBbXCJSZWFsbHkgU21hcnRcIiwgXCJTdXBlciBGbGV4aWJsZVwiLFxyXG4gICAgICAgIFwiU3VwZXIgSG90XCIsIFwiV2VhdGhlciBDaGFuZ2VyXCJdO1xyXG4gICAgbW9kZWwgPSBuZXcgSGVybygxOCwgXCJEciBJUVwiLCB0aGlzLnBvd2Vyc1swXSwgXCJDaHVjayBPdmVyc3RyZWV0XCIpO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHdlJ3JlIGRvbmVcclxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5tb2RlbCk7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
