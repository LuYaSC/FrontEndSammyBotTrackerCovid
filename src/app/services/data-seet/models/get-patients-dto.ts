export class GetPatientsDto {
    phone = '';
    ci = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}