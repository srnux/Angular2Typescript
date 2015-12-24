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
    var InitCapsPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InitCapsPipe = (function () {
                function InitCapsPipe() {
                }
                InitCapsPipe.prototype.transform = function (value) {
                    return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
                        return m.toUpperCase();
                    });
                };
                InitCapsPipe = __decorate([
                    core_1.Pipe({ name: "initCaps" }), 
                    __metadata('design:paramtypes', [])
                ], InitCapsPipe);
                return InitCapsPipe;
            })();
            exports_1("InitCapsPipe", InitCapsPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbml0LWNhcHMtcGlwZS50cyJdLCJuYW1lcyI6WyJJbml0Q2Fwc1BpcGUiLCJJbml0Q2Fwc1BpcGUuY29uc3RydWN0b3IiLCJJbml0Q2Fwc1BpcGUudHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFDQTtnQkFBQUE7Z0JBT0FDLENBQUNBO2dCQUxHRCxnQ0FBU0EsR0FBVEEsVUFBVUEsS0FBYUE7b0JBQ25CRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLFVBQVVBLENBQUNBO3dCQUM1RCxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFOTEY7b0JBQUNBLFdBQUlBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLENBQUNBOztpQ0FPMUJBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQsdUNBT0MsQ0FBQSIsImZpbGUiOiJhcHAvaW5pdC1jYXBzLXBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbkBQaXBlKHsgbmFtZTogXCJpbml0Q2Fwc1wiIH0pXHJcbmV4cG9ydCBjbGFzcyBJbml0Q2Fwc1BpcGUge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oPzpefFxccylbYS16XS9nLCBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
