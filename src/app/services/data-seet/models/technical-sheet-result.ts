export class TechnicalSheetResult {
    factor: string;
    categoryName: string;
    presentFactor: string;
    alterResponse: string;
    registerDate: Date;
    confirmed: string; 

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}