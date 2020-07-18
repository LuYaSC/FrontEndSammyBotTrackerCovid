export class EvolutionFormDto {
    idFormularioInicial?: number;
    dia: number;
    estadoActual: string;
    estadoActualDescripcion: string;
    cerrado: boolean;
    ayudaExterna: string;
    ayudaExternaDescripcion: string;
    ayudaExternaComentarios: string;
    descripcionSalud: number;
    dolorGarganta: string;
    cuantoDolorGarganta: number;
    dolorCabeza: string;
    cuantoDolorCabeza: number;
    tos: string;
    fiebre: string;
    cuantaTemperatura: string;
    dificultadRespirar: string;
    dificultadTerminarOraciones: string;
    sienteCansancio: string;
    recojoMedicamentos: string;
    recojoMedicamentosDescripcion: string;
    tomaMedicamentos: string;
    tomaMedicamentosDescripcion: string;
    recibirSuero: string;
    donarSangre: string;
    comentarios: string;
    alta: string;


    constructor() {
        this.idFormularioInicial = null;
        this.dia = 0;
        this.estadoActual = '';
        this.estadoActualDescripcion = '';
        this.cerrado = false;
        this.ayudaExterna = '';
        this.ayudaExternaDescripcion = '';
        this.ayudaExternaComentarios = '';
        this.descripcionSalud = 0;
        this.dolorGarganta = '';
        this.cuantoDolorGarganta = 0;
        this.dolorCabeza = '';
        this.cuantoDolorCabeza = 0;
        this.tos = '';
        this.fiebre = '';
        this.cuantaTemperatura = '';
        this.dificultadRespirar = '';
        this.dificultadTerminarOraciones = '';
        this.sienteCansancio = '';
        this.recojoMedicamentos = '';
        this.recojoMedicamentosDescripcion = '';
        this.tomaMedicamentos = '';
        this.tomaMedicamentosDescripcion = '';
        this.recibirSuero = '';
        this.donarSangre = '';
        this.comentarios = '';
        this.alta = '';
    }

    saveValidate(formDto:EvolutionFormDto) {
        let e = [];
        e = this.validateRequired(e, 'Sección 1: Estado Actual', formDto.estadoActual);
        if(formDto.estadoActual === 'Otro') {
            e = this.validateRequired(e, 'Sección 1: Estado Actual (Otro)', formDto.estadoActualDescripcion);
        }

        if(formDto.estadoActual=='Internado'||formDto.estadoActual=='No hubo respuesta'){
            return e;
        }
        e = this.validateRequired(e, 'Sección 2: Aún cuenta con alguien', formDto.ayudaExterna);
        //if(formDto.ayudaExterna === 'Otro'){
            //e = this.validateRequired(e, 'Sección 2: Aún cuenta con alguien (Otro)', formDto.ayudaExternaDescripcion);
        //}

        e = this.validateRequired(e,'Sección 3: Estado de salud el día de hoy con relacion al dia de ayer', formDto.descripcionSalud);
        e = this.validateRequired(e, 'Sección 3: ¿Tiene Dolor en la garganta?', formDto.dolorGarganta);
        if(formDto.dolorGarganta == 'Si') {
            e = this.validateRequired(e, 'Sección 3: ¿Cuanto dolor de Cabeza?', formDto.cuantoDolorGarganta);
        }

        e = this.validateRequired(e, 'Sección 3: ¿Tiene dolor de cabeza?', formDto.dolorCabeza);
        if(formDto.dolorCabeza == 'Si') {
            e = this.validateRequired(e, 'Sección 3: ¿Cuanto es su dolor de garganta?', formDto.cuantoDolorCabeza);
        }

        e = this.validateRequired(e, 'Sección 4: ¿Tiene tos?', formDto.tos);
        e = this.validateRequired(e, 'Sección 4: ¿Tiene fiebre?', formDto.fiebre);
        e = this.validateRequired(e, 'Sección 4: ¿Cuánto es su tempertura hoy?', formDto.cuantaTemperatura);
        e = this.validateRequired(e, 'Sección 4: ¿Tiene dificultad para respirar?', formDto.dificultadRespirar);
        e = this.validateRequired(e, 'Sección 4: Dificultad para terminar las frases u oraciones', formDto.dificultadTerminarOraciones);

        e = this.validateRequired(e, 'Sección 4: ¿Siente cansancio estando en reposo?', formDto.sienteCansancio);


        e = this.validateRequired(e, 'Sección 5: ¿Mando a alguna persona a que recoja su tratamiento?', formDto.recojoMedicamentos);
        if(formDto.recojoMedicamentos === 'Si') {
            e = this.validateRequired(e, 'Sección 5: ¿Está tomando su medicación como se le indico?', formDto.tomaMedicamentos);
        }

        if(formDto.recojoMedicamentos === 'No'||formDto.recojoMedicamentos === 'Todavia') {
            e = this.validateRequired(e, 'Sección 5: Mando a alguna persona a que recoja su tratamiento (No, Todavia)',
                        formDto.recojoMedicamentosDescripcion);
        }
        if(formDto.tomaMedicamentos === 'No') {
            e = this.validateRequired(e, 'Sección 5: ¿Por que no está tomando su medicación?', formDto.tomaMedicamentosDescripcion);
        }
        if(formDto.dia === 14) {
            e = this.validateRequired(e, 'Sección 6: ¿En caso de emergencia, le gustaría recibir suero hiperinmune de pacientes Infectados por Covid-19 que han superado la enfermedad y ahora son NEGATIVOS ?', formDto.recibirSuero);
            e = this.validateRequired(e, 'Sección 6: ¿Le gustaria voluntariamente donar su sangre una vez haya superado la enfermedad, para que lo utilizen otros pacientes en caso de emergencia?', formDto.donarSangre);
        }


        e = this.validateRequired(e, 'Sección 7: Comentarios', formDto.comentarios);

        e = this.validateRequired(e, 'Sección 8: ¿Paciente dado de Alta?', formDto.tos);

        return e;
    }
    validateRequired(errors: string[], campo: string, valor: any) {
        if(typeof valor === 'string') {
            if(valor === '' || valor == null || valor.trim() === '') {
            errors.push('El campo ' + campo + ' es obligatorio.');
            }
        } else {
            if(valor === 0 || valor == null) {
            errors.push('El campo ' + campo + ' es obligatorio.');
            }
        }
        return errors;
    }
}