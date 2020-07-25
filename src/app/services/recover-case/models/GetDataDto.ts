export class GetDataDto {
    casoId: number;
    nivel: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
