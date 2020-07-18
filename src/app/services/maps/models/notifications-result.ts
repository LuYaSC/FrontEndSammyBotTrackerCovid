export class NotificationsResult {
    id?: number;
    nivel: string;
    numeroContacto: string;
    ci: string;
    fechaHoraRegistro: string;
    latitud: number;
    longitud: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}