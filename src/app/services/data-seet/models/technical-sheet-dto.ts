export class TechnicalSheetDto {
    id: number;
    observations: string;
    isCancel: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}