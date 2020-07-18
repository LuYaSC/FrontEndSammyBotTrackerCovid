export class FormDiagDto {
    numeroHistoria: string; //25
    matricula: string; // 20
    documento: number;
    tipoDocumento: string; // 15
    extension: string; //3
    complemento: string; //2
    nombre: string; //40
    apellidoPaterno: string; //30
    apellidoMaterno: string; //30
    ocupacion: string; //25
    areaLaboral: string; //35
    empresaTrabaja: string; //100
    direccion: string; //100
    email: string; //40
    fechaNacimiento: string;
    edad: number;
    genero: string; //1 (F, M, O)
    telefono: number;
    celular: string; // 8
    riesgoParaMedicos: string; //
    riesgoParaMedicosDescripcion: string; //
    fechaInicioSintomas: string;
    fechaTomaMuestra: string;
    estaInternado: string; //2
    enfermedadesPadece: string; //350
    medicamentosPorEnfermedad: string; //300
    estaEmbarazada: string; //2
    fechaUltimaMenstruacion: string; 
    peso: number;
    talla: number;
    indiceMasaCorporal: number;
    disponeDomicilio: string; //2
    disponePersonaAyudaCama: string;//2
    disponePersonaAyudaHablar: string;//2
    disponeAyudaComida: string;//2
    disponeAyudaLimpieza: string;//2
    fuma: string;//2
    cigarrillosAlDia: string;//30
    haceCuantoNoFuma: string;//30
    bebidasAlcoholicas: string;//2
    cantidadConsumoBebidas: string; //50
    estupefacientes: string;//2
    sedentarismo: string;//40
    carenciaEconomica: string;//2
    tensionFamiliar: string;//2
    escalaTensionFamiliar: string;//100
    comentariosTensionFamiliar: string; //100
    estadoSaludActual: string; //20
    rangoEstadoSalud: number;
    tos: string;//2
    dolorGarganta: string;//2
    dolorCabeza: string;//2
    fiebre: string;//2
    temperatura: string;//30
    pulso: string;//30
    dificultadRespirar: string;//2
    frecuenciaRespiratoria: string;//30
    dificultadTerminarFrases: string;//2
    medicamentosConsumidos: string;//300
    vitaminasConsumidas: string;//200
    usoMedicinaNaturista: string;//2
    medicinaNaturistaConsumida: string;//50
    deseaRecibirSuero: string;//2
    deseaDonarSangre: string;//2
    medicoAsignado: string; //50
    tipoSangre: string;//5
    perdioPeso: string;//1
    ocupacionDescripcion: string;
    enfermedadesPadeceDescripcion: string;
    medicamentosPorEnfermedadDescripcion: string;
    medicamentosConsumidosDescripcion: string;
    vitaminasConsumidasDescripcion: string;
    medicinaNaturistaConsumidaDescripcion: string;
    apoyoEmocional: string;
    metodoTratamientoUtilizado: string;
    cansancioReposo: string;
    estadoActual: string;
    estadoActualDescripcion: string;
    direccionLatitud: number;
    direccionLongitud: number;

    constructor() {
        this.numeroHistoria = ''; //25
        this.matricula = ''; // 20
        this.documento = 0;
        this.tipoDocumento = ''; // 15
        this.extension = ''; //3
        this.complemento = ''; //2
        this.nombre = ''; //40
        this.apellidoPaterno = ''; //30
        this.apellidoMaterno = ''; //30
        this.ocupacion = ''; //25
        this.areaLaboral = ''; //35
        this.direccion = ''; //100
        this.email = ''; //40
        this.fechaNacimiento = '';
        this.edad = 0;
        this.genero = ''; //1 (F, M, O)
        this.empresaTrabaja = '';
        this.telefono = 0;
        this.celular = ''; // 8
        this.riesgoParaMedicos = ''; //300
        this.riesgoParaMedicosDescripcion = '';
        this.fechaInicioSintomas = '';
        this.fechaTomaMuestra = '';
        this.estaInternado = ''; //2
        this.enfermedadesPadece = ''; //350
        this.medicamentosPorEnfermedad = ''; //300
        this.estaEmbarazada = ''; //2
        this.fechaUltimaMenstruacion = ''; 
        this.peso = 0;
        this.talla = 0;
        this.indiceMasaCorporal = 0;
        this.disponeDomicilio = ''; //2
        this.disponePersonaAyudaCama = '';//2
        this.disponePersonaAyudaHablar = '';//2
        this.disponeAyudaComida = '';//2
        this.disponeAyudaLimpieza = '';//2
        this.fuma = '';//2
        this.cigarrillosAlDia = '';//30
        this.haceCuantoNoFuma = '';//30
        this.bebidasAlcoholicas = '';//2
        this.cantidadConsumoBebidas = ''; //50
        this.estupefacientes = '';//2
        this.sedentarismo = '';//40
        this.carenciaEconomica = '';//2
        this.tensionFamiliar = '';//2
        this.escalaTensionFamiliar = '';//100
        this.comentariosTensionFamiliar = ''; //100
        this.estadoSaludActual = ''; //20
        this.rangoEstadoSalud = 0;
        this.tos = '';//2
        this.dolorGarganta = '';//2
        this.dolorCabeza = '';//2
        this.fiebre = '';//2
        this.temperatura = '';//30
        this.pulso = '';//30
        this.dificultadRespirar = '';//2
        this.frecuenciaRespiratoria = '';//30
        this.dificultadTerminarFrases = '';//2
        this.medicamentosConsumidos = '';//300
        this.vitaminasConsumidas = '';//200
        this.usoMedicinaNaturista = '';//2
        this.medicinaNaturistaConsumida = '';//50
        this.deseaRecibirSuero = '';//2
        this.deseaDonarSangre = '';//2
        this.medicoAsignado = ''; //50
        this.ocupacionDescripcion = '';
        this.enfermedadesPadeceDescripcion = '';
        this.medicamentosConsumidosDescripcion = '';
        this.vitaminasConsumidasDescripcion = '';
        this.medicinaNaturistaConsumidaDescripcion = '';
        this.apoyoEmocional = '';
        this.metodoTratamientoUtilizado = '';
        this.cansancioReposo = '';
        this.estadoActual = '';
        this.estadoActualDescripcion = '';
        this.direccionLatitud = -17.047501;
        this.direccionLongitud = -64.899520;
    }

    saveValidate(formDto:FormDiagDto) {
        let e = [];
        //e = this.validateRequired(e, 'Sección 1: medicoAsignado', formDto.medicoAsignado);
        //e = this.validateRequired(e, 'Sección 1: email', formDto.email);
        
        e = this.validateRequired(e, 'Sección 1: Numero Historia', formDto.numeroHistoria);
        e = this.validateRequired(e, 'Sección 1: Nombre', formDto.nombre);
        e = this.validateRequired(e, 'Sección 1: Apellido Paterno', formDto.apellidoPaterno);
        e = this.validateRequired(e, 'Sección 1: Estado Actual', formDto.estadoActual);
        if(formDto.estadoActual === 'Otro') {
            e = this.validateRequired(e, 'Sección 1: Estado Actual (Otro)', formDto.estadoActualDescripcion);
        }

        if(formDto.estadoActual === 'Internado' || 
            formDto.estadoActual === 'No hubo respuesta' || formDto.estadoActual === 'Otro' 
            || formDto.estadoActual === '') {
            return e;
        }
        //e = this.validateRequired(e, 'Sección 1: Apellido Materno', formDto.apellidoMaterno);

        e = this.validateRequired(e, 'Sección 2: Tipo Documento', formDto.tipoDocumento);
        e = this.validateRequired(e, 'Sección 2: Documento', formDto.documento);
        if(formDto.tipoDocumento === 'CI') {
            e = this.validateRequired(e, 'Sección 2: Extension', formDto.extension);
        }
        
        
        e = this.validateRequired(e, 'Sección 2: Número de Matricula Asegurado', formDto.matricula);
        //e = this.validateRequired(e, 'Sección 1: fechaNacimiento', formDto.fechaNacimiento);
        e = this.validateRequired(e, 'Sección 2: Edad', formDto.edad);
        e = this.validateRequired(e, 'Sección 2: Genero', formDto.genero);
        e = this.validateRequired(e, 'Sección 2: Empresa trabaja', formDto.empresaTrabaja);
        e = this.validateRequired(e, 'Sección 2: Dirección', formDto.direccion);
        //e = this.validateRequired(e, 'Sección 1: telefono', formDto.telefono);
        //e = this.validateRequired(e, 'Sección 1: celular', formDto.celular);

        e = this.validateRequired(e, 'Sección 3: Ocupacion', formDto.ocupacion);

        if(formDto.ocupacion === 'Otro'){
            e = this.validateRequired(e, 'Sección 3: Otra ocupación', formDto.ocupacionDescripcion);
        }

        if(formDto.ocupacion === 'Personal de Salud'){
            e = this.validateRequired(e, 'Sección 3: Area Laboral', formDto.areaLaboral);
        }
        if(formDto.areaLaboral === 'Medicina'){
            e = this.validateRequired(e, 'Sección 3: Labor de trábajo', formDto.riesgoParaMedicos);
        }
        
        
        e = this.validateRequired(e, 'Sección 4: Fecha Inicio Síntomas', formDto.fechaInicioSintomas);
        e = this.validateRequired(e, 'Sección 4: Fecha Toma Muestra', formDto.fechaTomaMuestra);
        //e = this.validateRequired(e, 'Sección 4: Esta Internado', formDto.estaInternado);
        e = this.validateRequired(e, 'Sección 4: Enfermedades que Padece', formDto.enfermedadesPadece);
        //e = this.validateRequired(e, 'Sección 3: Otra enfermedad', formDto.enfermedadesPadeceDescripcion); //aun no se puede
        e = this.validateRequired(e, 'Sección 4: Medicamentos por Enfermedad', formDto.medicamentosPorEnfermedad);
        //e = this.validateRequired(e, 'Sección 3: Otros Medicamentos por Enfermedad', formDto.medicamentosPorEnfermedadDescripcion); //aun no se puede
        
        /*if(formDto.estaEmbarazada=="Si"){
            e = this.validateRequired(e, 'Sección 3: Esta Embarazada', formDto.estaEmbarazada);
            //e = this.validateRequired(e, 'Sección 3: fechaUltimaMenstruacion', formDto.fechaUltimaMenstruacion);
        }      */  
        
        e = this.validateRequired(e, 'Sección 4: Peso', formDto.peso);
        e = this.validateRequired(e, 'Sección 4: Talla', formDto.talla);
        e = this.validateRequired(e, 'Sección 4: Indice Masa Corporal', formDto.indiceMasaCorporal);

        e = this.validateRequired(e, 'Sección 5: Habitación independiente', formDto.disponeDomicilio);
        e = this.validateRequired(e, 'Sección 5: Dispone de Ayuda cuando este en Cama', formDto.disponePersonaAyudaCama);
        e = this.validateRequired(e, 'Sección 5: Dispone de alguien que le ayude a hablar', formDto.disponePersonaAyudaHablar);
        e = this.validateRequired(e, 'Sección 5: Dispone de alguien que le prepare la Comida', formDto.disponeAyudaComida);
        e = this.validateRequired(e, 'Sección 5: Dispone de alguien que le ayude en las tareas de casa', formDto.disponeAyudaLimpieza);

        e = this.validateRequired(e, 'Sección 6: Fuma o a fumado', formDto.fuma);
        //e = this.validateRequired(e, 'Sección 5: Cuantos cigarros al dia', formDto.cigarrillosAlDia);
        if(formDto.fuma === 'No'){
            e = this.validateRequired(e, 'Sección 6: Hace Cuanto No Fuma', formDto.haceCuantoNoFuma);
        }
        
        //e = this.validateRequired(e, 'Sección 6: Consume Bebidas Alcoholicas', formDto.bebidasAlcoholicas);

        //if(formDto.bebidasAlcoholicas === 'Si') {
            //e = this.validateRequired(e, 'Sección 6: Cantidad Consumo de Bebidas', formDto.cantidadConsumoBebidas);
        //}
        //e = this.validateRequired(e, 'Sección 6: Consume Estupefacientes', formDto.estupefacientes);
        //e = this.validateRequired(e, 'Sección 6: Realiza actividad Física', formDto.sedentarismo);

        e = this.validateRequired(e, 'Sección 7: Tension Familiar', formDto.tensionFamiliar);
        if(formDto.tensionFamiliar === 'Si' || formDto.tensionFamiliar === 'TV'){
            e = this.validateRequired(e, 'Sección 7: Escala de Tension Familiar', formDto.escalaTensionFamiliar);
        }
        
        //e = this.validateRequired(e, 'Sección 6: Comentarios de Tensión Familiar', formDto.comentariosTensionFamiliar);
        
        //e = this.validateRequired(e, 'Sección 7: Estado Salud Actual', formDto.estadoSaludActual);
        e = this.validateRequired(e, 'Sección 8: Rango de Estado de Salud', formDto.rangoEstadoSalud);
        e = this.validateRequired(e, 'Sección 8: Dolor de Garganta', formDto.dolorGarganta);
        e = this.validateRequired(e, 'Sección 8: Dolor de Cabeza', formDto.dolorCabeza);

        e = this.validateRequired(e, 'Sección 9: Tos', formDto.tos);
        e = this.validateRequired(e, 'Sección 9: Fiebre', formDto.fiebre);
        e = this.validateRequired(e, 'Sección 9: Temperatura', formDto.temperatura);
        //e = this.validateRequired(e, 'Sección 9: Pulso', formDto.pulso);
        e = this.validateRequired(e, 'Sección 9: DificultadRespirar', formDto.dificultadRespirar);
        //e = this.validateRequired(e, 'Sección 9: Frecuencia Respiratoria', formDto.frecuenciaRespiratoria);
        e = this.validateRequired(e, 'Sección 9: Dificultad al Terminar las Frases', formDto.dificultadTerminarFrases);
        e = this.validateRequired(e, 'Sección 9: Cansancio Reposo', formDto.cansancioReposo);

        e = this.validateRequired(e, 'Sección 10: Medicamentos Consumidos', formDto.medicamentosConsumidos);
        //e = this.validateRequired(e, 'Sección 9: Otros medicamentos', formDto.medicamentosConsumidosDescripcion);
        e = this.validateRequired(e, 'Sección 10: Metodo de tramamiento utilizado', formDto.metodoTratamientoUtilizado);
        
        e = this.validateRequired(e, 'Sección 10: Vitaminas Consumidas', formDto.vitaminasConsumidas);
        //e = this.validateRequired(e, 'Sección 9: Otras vitaminas', formDto.vitaminasConsumidasDescripcion);
        e = this.validateRequired(e, 'Sección 10: Uso de Medicina Naturista', formDto.usoMedicinaNaturista);

        if(formDto.usoMedicinaNaturista === 'Si'){
            e = this.validateRequired(e, 'Sección 10: Medicina Naturista Consumida', formDto.medicinaNaturistaConsumida);
        }
        
        //e = this.validateRequired(e, 'Sección 9: Otra medicina naturista', formDto.medicinaNaturistaConsumidaDescripcion);
        e = this.validateRequired(e, 'Sección 10: Desea Recibir Suero', formDto.deseaRecibirSuero);
        e = this.validateRequired(e, 'Sección 10: Desea Donar Sangre', formDto.deseaDonarSangre);
        if(formDto.deseaDonarSangre === 'Si'){
            e = this.validateRequired(e, 'Sección 10: Tipo de sangre', formDto.tipoSangre);
        }

        e = this.validateRequired(e, 'Sección 11: Apoyo emocional', formDto.apoyoEmocional);
        
        
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