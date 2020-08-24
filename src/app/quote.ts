export class Quote {
    public showDescription: boolean;
    constructor(public name: string, public description: string, public addedAt: Date) {
        this.showDescription = false
    }
}
