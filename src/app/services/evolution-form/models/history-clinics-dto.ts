export class HistoryClinicsDto {
    id: number;
    idForm: number;
    numeroHistoria: string;
    paciente: string;
    dateCreation: string;
    tieneDiagInicial: string;
    tieneDiagEvolucion: string;
    constructor() {
        this.id = null;
        this.numeroHistoria = '';
        this.paciente = '';
        this.dateCreation = '';
        this.tieneDiagInicial = '';
        this.tieneDiagEvolucion = '';
    }
}
