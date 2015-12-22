System.register([], function(exports_1) {
    return {
        setters:[],
        execute: function() {
            describe("Hero", function () {
                it("has name given in the constructor", function () {
                    var hero = { id: 1, name: "MrAntipattern" };
                    expect(hero.name).toEqual("MrAntipattern");
                });
                it("has id given in the constructor", function () {
                    var hero = { id: 1, name: "MrAntipattern" };
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map