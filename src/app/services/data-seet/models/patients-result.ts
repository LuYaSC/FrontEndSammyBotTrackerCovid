export class PatientsResult {
    id: number;
    controlDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}