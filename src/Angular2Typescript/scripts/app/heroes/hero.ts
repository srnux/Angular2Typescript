export interface IHero {
    id: number;
    name: string;
}

export interface IHeroExtended {
    power: string;
    alterEgo?: string;
}

export class Hero implements IHero, IHeroExtended{
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
}