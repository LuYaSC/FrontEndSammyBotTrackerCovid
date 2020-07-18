export class MyCasesResult {
    casoId: number;
    numeroContacto: string;
    nombreInterno: string;
    nombreDoctor: string;
    nombrePaciente: string;
    descripcionNivel: number;
    horaInicio: string;
    horaFin: string;
    finalizado: string;
    inconcluso: string;
    observaciones: string;
    fechaCreacion: Date;
    fechaModificacion: string;
    enAtencion: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
