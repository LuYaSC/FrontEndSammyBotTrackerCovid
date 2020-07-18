export class GetData {
    latitud: number;
    longitud: number;
    nivel: string;
    numeroContacto: string;
    ci: string;
    fechaHoraRegistro: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}