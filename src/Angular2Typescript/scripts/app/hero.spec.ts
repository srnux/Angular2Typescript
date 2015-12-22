import {IHero} from "./hero";

describe("Hero", () => {
    it("has name given in the constructor", () => {
        var hero: IHero = { id: 1, name: "MrAntipattern" };
        expect(hero.name).toEqual("MrAntipattern");
    });
    it("has id given in the constructor", () => {
        var hero: IHero = { id: 1, name: "MrAntipattern" };
        expect(hero.id).toEqual(1);
    });
})