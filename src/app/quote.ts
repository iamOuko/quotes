export class Quote {
    public showDescription: boolean;
    constructor(public id: number, public author: string, public description: string, public addedAt: Date) {
        this.showDescription = false
    }
}
