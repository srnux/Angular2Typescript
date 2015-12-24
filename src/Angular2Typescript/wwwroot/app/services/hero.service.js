System.register(["./mock-heroes", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_heroes_1, core_1;
    var HeroService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES); //get from web api
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9oZXJvLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiSGVyb1NlcnZpY2UiLCJIZXJvU2VydmljZS5jb25zdHJ1Y3RvciIsIkhlcm9TZXJ2aWNlLmdldEhlcm9lcyIsIkhlcm9TZXJ2aWNlLmdldEhlcm9lc1Nsb3dseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFSR0QsK0JBQVNBLEdBQVRBO29CQUNJRSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxvQkFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsa0JBQWtCQTtnQkFDckRBLENBQUNBO2dCQUNERixxQ0FBZUEsR0FBZkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BOytCQUN0QkEsVUFBVUEsQ0FBQ0EsY0FBTUEsT0FBQUEsT0FBT0EsQ0FBQ0Esb0JBQU1BLENBQUNBLEVBQWZBLENBQWVBLEVBQUVBLElBQUlBLENBQUNBO29CQUF2Q0EsQ0FBdUNBLENBQUNBLFlBQVlBO29CQUFiQSxDQUFDQSxZQUFZQTtxQkFDdkRBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFUTEg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBVVpBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FWQSxBQVVDQSxJQUFBO1lBVkQscUNBVUMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvaGVyby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIRVJPRVN9IGZyb20gXCIuL21vY2staGVyb2VzXCJcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZXJvU2VydmljZSB7XHJcbiAgICBnZXRIZXJvZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShIRVJPRVMpOy8vZ2V0IGZyb20gd2ViIGFwaVxyXG4gICAgfVxyXG4gICAgZ2V0SGVyb2VzU2xvd2x5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShIRVJPRVMpLCAyMDAwKSAvLyAyIHNlY29uZHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
