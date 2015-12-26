System.register(["angular2/platform/browser", 'angular2/router', "./app.component", './dialog.service', './heroes/hero.service'], function(exports_1) {
    var browser_1, router_1, app_component_1, dialog_service_1, hero_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                dialog_service_1.DialogService,
                hero_service_1.HeroService
            ]);
        }
    }
});
//bootstrap(HeroComponent);  
//# sourceMappingURL=boot.js.map