export class EvolutionBasicDataDto {
    idFormularioInicial: number;
    idUser: number;
    nombreMedico: string;
    dia: number;
    numeroHistoria: string;
    paciente: string;
    antEstadoSalud: string;
    antDolorGarganta: string;
    antCuantoDolorGarganta: string;
    antDolorCabeza: string;
    antCuantoDolorCabeza: string;
    antTos: string;
    antFiebre: string;
    antTemperatura: string;
    antDificultadRespirar: string;
    antDificultadTerminarOraciones: string;
    antCansancio: string;

    constructor() {
        this.idFormularioInicial = 0;
        this.idUser = 0;
        this.nombreMedico = '';
        this.dia = 0;
        this.numeroHistoria = '';
        this.paciente = '';
        this.antEstadoSalud = '';
        this.antDolorGarganta = '';
        this.antCuantoDolorGarganta = '';
        this.antDolorCabeza = '';
        this.antCuantoDolorCabeza = '';
        this.antTos = '';
        this.antFiebre = '';
        this.antTemperatura = '';
        this.antDificultadRespirar = '';
        this.antDificultadTerminarOraciones = '';
        this.antCansancio = '';
    }
}