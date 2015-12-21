System.register(["angular2/platform/browser", "./hero.component"], function(exports_1) {
    var browser_1, hero_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(hero_component_1.HeroComponent);
        }
    }
});
