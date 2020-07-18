import { Component, OnInit, OnChanges, ViewChild, ElementRef, AfterContentInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, FormControl} from '@angular/forms';
import { TrakingFormService } from '../../services/traking-form/traking-form.service';
import { FormDiagDto } from '../../services/traking-form/models/form-diag-dto';
import * as moment from 'moment';

import { MatVerticalStepper } from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import 'leaflet';
import 'leaflet-routing-machine';
import 'beautifymarker';
import 'leaflet-tag-filter-button/src/leaflet-tag-filter-button.js';
import 'leaflet-easybutton/src/easy-button.js';
import "leaflet-easybutton";
declare let L;

@Component({
  selector: 'app-traking-form-disabled',
  templateUrl: './traking-form-disabled.component.html',
  styleUrls: ['./traking-form-disabled.component.css']
})
export class TrakingFormDisabledComponent implements OnInit, OnChanges, AfterContentInit {

  @Input('data-formulario') formulario:FormDiagDto;
  map;
  @ViewChild('mapElement', {static: false}) mapElement: ElementRef;
  @ViewChild('stepper') private myStepper: MatStepper;
  @ViewChild('formStep1') formStep1: NgForm;

  countryMaps = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
  });
  markers = L.markerClusterGroup({ animateAddingMarkers: true });
  marker;
  latitud: number;
  longitud: number;
  
  searchBy = 'Matricula';
  historia = '';
  matricula = '';
  isDonate = true;
  isDisableMatricula = true;
  isVisibleMedicine = true;
  isVisibleMapa = true;

  otraOcupacion = '';

  formDto: FormDiagDto = new FormDiagDto();
  listForms: any = [];
  idForm: number;
  isLoading = false;
  isDisabled = true;

  fechaNacimiento: Date;
  fechaInicioSintomas: Date;
  fechaTomaMuestra: Date;
  fechaUltimaMenstruacion: Date;
  fechaNacimientoString: string;
  fechaTomaMuestraString: string;
  fechaUltimaMenstruacionString: string;

  dayFechaNac = '';
  monthFechaNac = '';
  yearFechaNac = '';
  dayFechaTomaMuestra = '';
  monthFechaTomaMuestra = '';
  yearFechaTomaMuestra = '';
  dayFechaUltimaMestruacion = '';
  monthFechaUltimaMestruacion = '';
  yearFechaUltimaMestruacion = '';
  dayFechaInicioSintomas = '';
  monthFechaInicioSintomas = '';
  yearFechaInicioSintomas = '';

  days = [];
  months = [];
  years = [];

  listaDocumento: string[] = ['CI', 'PASAPORTE', 'LIBRETA MILITAR', 'RUN'];
  listaExtension: string[] = ['LP', 'SC', 'CB', 'OR', 'PT', 'PD', 'BN', 'CH', 'TJ'];
  lista7: string[] = ['Masculino','Femenino','Ninguno','Otro',];
  listaGenero = [{value:'M', text:'Masculino'},{value:'F',text:'Femenino'}];
  listaSiNoTV = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  listaSiNo = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista6: string[] = ['Contactado','Internado','No hubo respuesta','Otro',];
  lista11: string[] = ['Personal de Salud','Policia','Magisterio','Construccion','Alimentos','Manufactura','Desempleado','Jubilado','Otro'];
  
  lista14: string[] = ['Medicina','Enfermeria (Licenciada o Auxiliar)','Laboratorio','Fisioterapia/kinesiologia','Odontologia',];
  lista15: string[] = ['Emergencia','Terapia Intensiva','Terapia Intermedia','Urgencia','Consultorio Covid','Consulta Externa General','Sala Hospitalaria','Direccion','Quirofano','Triage','Transporte y traslado','Otro'];
  lista17: string[] = ['Si','No',];
  lista18: string[] = ['Diabetes','Hipertensión Arterial','Tuberculosis','Enfermedad Respiratoria (ASMA. ENF. OBSTRUCTIVA CRONICA. FIBROSIS. OTRA)','Inmudepresión (Cancer. Colagenopatias. etc)','Enfermedad Cardiaca','Chagas','Enfermedad Renal','Ninguna de las anteriores','Otro',];
  lista20: string[] = ['IECA (enalapril. rinopril. lisinopril. ramipril. etc)','ARA-2 (Losartan. Temisartan. Valsartan. etc)','InmunoSupresores (Nectofenolato. vincristina. cicloflosfamida. metotrexate. etc)', 'Ninguno', 'Otro'];
  lista21 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista26 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista27 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista28 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista29 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista30 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista31 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista32: string[] = ['Mas de 30 paquetes al año','Menos de 30 paquetes al año',];
  lista33: string[] = ['Nunca ha fumado','Hace mas de 1 año','Hace mas de 3 meses pero menos de 1 año',];
  lista34 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista35: string[] = ['Si es hombre - más de 4 medidas en ún solo día o 14 a la semana','Si es mujer - más de 3 medidas en ún solo día o 7 a la semana', 'Ninguna'];
  lista36 = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  lista37: string[] = ['Sí - 3 veces por semana durnte al menos 30 minutos','Sí - menos de 3 veces por semana','No realizo actividades físicas',];
  lista38 = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  lista39 = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  lista40: string[] = ['Agresion Verbal','Agresion Fisica','Agresion Psicologica','Agresión Sexual','Ninguna de las anteriores',];
  lista42: string[] = ['Sano','Enfermo','Otro',];
  lista45: number[] = [1,2,3,4,5,];
  lista46 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista47 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista48 = [{value:'Si', text:'Si'},{value:'No', text:'No'}];
  lista49 = [{value:'Si', text:'Si'},{value:'No', text:'No'}, {value:'NS', text:'No sé'}];
  lista50: string[] = ['37.4 °Centigrados o menos','Más de 37.4 °Centigrados','No sé',];
  lista51: string[] = ['Más de 100 pulsaciones por minuto','Menos de 100 pulsaciones por minuto','No se - no me he tomado el pulso',];
  lista52: string[] = ['Si','No',];
  lista53: string[] = ['Menos o igual a 22 respiraciones por minuto','23 o más respiraciones por minuto',' No sé',];
  lista54: string[] = ['Si','No',];
  lista55: string[] = ['Hidroxicloroquina o Cloroquina','Azitromicina','Ivermectina','Indometacina','Trimetoprima Sulfametoxazol (Cotrimoxazol / Bactrin / Bacterol)','Aspirina','Prednisona','Ninguno de los anteriores','Otro',];
  lista57: string[] = ['Zinc','Omega - 3 u Omega - 6','Calcio','Magnesio','Vitamina B', 'Vitamina C', 'Vitamina D','Ninguno','Otro',];
  lista59: string[] = ['Si','No',];
  lista60: string[] = ['Eucalipto','Menta','Limon', 'Ajo', 'Gengibre', 'Salmuera', 'Manzanilla',
                        'Vapores', 'Miel', 'Vinagre','Bicarbonato','Ninguno','Otro',];
  lista62 = [{value:'Si', text:'Si'},{value:'No', text:'No'}, {value:'NS', text:'No sé'}];
  lista63 = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  listTypeBlood = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+' , '0-'];

  title1 = 'Inicio';
  title2 = 'Datos Personales';
  title3 = 'Riesgo Laboral';
  title4 = 'Antecedentes Medicos';
  title5 = 'Apoyo Social';
  title6 = 'Antecedentes Sociales';
  title7 = 'Tensión Familiar';
  title8 = 'Datos Clínicos Subjetivos';
  title9 = 'Datos Clinicos Objetivos';
  title10 = 'Riesgo de Intoxicación';
  title11 = 'Apoyo Emocional';

  riesgoParaMedicosChecked: Boolean[] = [];
  enfermedadesPadeceChecked: Boolean[] = [];
  medicamentosPorEnfermedadChecked: Boolean[] = [];
  escalaTensionFamiliarChecked: Boolean[] = [];
  estadoSaludActualChecked: Boolean[] = [];
  medicamentosConsumidosChecked: Boolean[] = [];
  vitaminasConsumidasChecked: Boolean[] = [];
  medicinaNaturistaConsumidaChecked: Boolean[] = [];
  isSuccess = false;
  message = '';

  options = {
    layers: [
      this.countryMaps,
      this.markers
    ],
    zoom: 6.46,
    center: L.latLng([-17.047501, -64.899520,])
  };

  constructor(private _formBuilder: FormBuilder) {
    
    this.inicialiceFecha(new Date());
    //console.log(this.formDto);
  }

  ngOnInit() {
    this.setDates();
  }

  ngOnChanges() {
    this.isVisibleMapa = true;
    this.formDto = this.formulario;
    this.getCheckBoxs();
    this.inicialiceFechaNac(this.formDto.fechaNacimiento);
    this.inicialiceFechaTomaMuestra(this.formDto.fechaTomaMuestra);
    this.inicialiceFechaUltimaMestruacion(this.formDto.fechaUltimaMenstruacion);
    this.inicialiceFechaInicioSintomas(this.formDto.fechaUltimaMenstruacion);
    if(this.formDto.direccionLatitud !== 0 && this.formDto.direccionLongitud !== 0) {
      this.loadMap();
    } else {
      this.isVisibleMapa = false;
    }
    
  }

  ngAfterContentInit() {
    
    //this.loadMap();
  }

  async loadMap() {
    this.isLoading = true;
    let r = await setTimeout(() => {
      this.map = new L.map(this.mapElement.nativeElement)
      this.countryMaps.addTo(this.map);
      this.map.setView(new L.LatLng(this.formDto.direccionLatitud, this.formDto.direccionLongitud), 8);
      this.latitud = this.formDto.direccionLatitud;
      this.longitud = this.formDto.direccionLongitud;
      
      this.marker = L.marker(
        [this.formDto.direccionLatitud, this.formDto.direccionLongitud],
        {
          icon: L.BeautifyIcon.icon({
            icon: 'medkit'
            , iconShape: 'marker', iconSize: [50, 50]
            , borderColor: 'White'
            , textColor: 'White', backgroundColor: 'limegreen'
            , innerIconStyle: 'font-size:25px;padding-top:7px;'
          }),
          draggable: false,
        }
      );
      this.markers.addLayer(this.marker);
      this.map.addLayer(this.markers);
      this.isLoading = false;
    }, 8000);
  }

  setDates() {
    let a = '';
    for(let i = 1; i<=31; i++){
      a = i + '';
      if(i<10){
        a = '0' + i;
      }
      this.days.push(a);
    }
    for(let i = 1; i<=12; i++){
      a = i + '';
      if(i<10){
        a = '0' + i;
      }
      this.months.push(a);
    }
    for(let i = 2020; i>=1900; i--){
      a = i + '';
      this.years.push(a);
    }
  }

  public showConsole() {
    this.setCheckBoxs();    
  }

  

  

  

  public newForm() {
    this.isDisabled = false;
    this.isDisableMatricula = false;
    this.formDto = new FormDiagDto();
    this.riesgoParaMedicosChecked = [];
    this.enfermedadesPadeceChecked = [];
    this.medicamentosPorEnfermedadChecked = [];
    this.escalaTensionFamiliarChecked = [];
    this.estadoSaludActualChecked = [];
    this.medicamentosConsumidosChecked = [];
    this.vitaminasConsumidasChecked = [];
    this.medicinaNaturistaConsumidaChecked = [];

    this.inicialiceFecha(new Date());
    this.myStepper.reset();
    const name = localStorage.getItem('doctorName');
    const lastName = localStorage.getItem('doctorLastName');

    this.formDto.medicoAsignado = lastName + " " + name;
    //console.log('name')
    //console.log(name)
  }

  public changeDonate() {
    this.isDonate = false;
    if(this.formDto.deseaDonarSangre=='Si' || this.formDto.deseaDonarSangre=='TV') {
      this.isDonate = true;
    }
  }

  private setCheckBoxs() {
    this.formDto.riesgoParaMedicos = '';
    this.formDto.enfermedadesPadece = '';
    this.formDto.medicamentosPorEnfermedad = '';
    this.formDto.escalaTensionFamiliar = '';
    this.formDto.estadoSaludActual = '';
    this.formDto.medicamentosConsumidos = '';
    this.formDto.vitaminasConsumidas = '';
    this.formDto.medicinaNaturistaConsumida = '';
    
    this.riesgoParaMedicosChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.riesgoParaMedicos += this.lista15[index] + ',';
      }
    });
    this.enfermedadesPadeceChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.enfermedadesPadece += this.lista18[index] + ',';
      }
    })
    this.medicamentosPorEnfermedadChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.medicamentosPorEnfermedad += this.lista20[index] + ',';
      }
    })
    this.escalaTensionFamiliarChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.escalaTensionFamiliar += this.lista40[index] + ',';
      }
    })
    this.estadoSaludActualChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.estadoSaludActual += this.lista42[index] + ',';
      }
    })
    this.medicamentosConsumidosChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.medicamentosConsumidos += this.lista55[index] + ',';
      }
    })
    this.vitaminasConsumidasChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.vitaminasConsumidas += this.lista57[index] + ',';
      }
    })
    this.medicinaNaturistaConsumidaChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.medicinaNaturistaConsumida += this.lista60[index] + ',';
      }
    })
  }

  cleanSearch() {
    this.matricula = '';
    this.historia = '';
  }

  inicialiceFecha(date: Date) {
    const dia = moment(date).format('DD').toString();
    const mes = moment(date).format('MM').toString()
    const anio = moment(date).format('YYYY').toString()
    this.dayFechaNac = dia;
    this.monthFechaNac = mes;
    this.yearFechaNac = anio;
    this.dayFechaTomaMuestra = dia;
    this.monthFechaTomaMuestra = mes;
    this.yearFechaTomaMuestra = anio;
    this.dayFechaUltimaMestruacion = dia;
    this.monthFechaUltimaMestruacion = mes;
    this.yearFechaUltimaMestruacion = anio;
    

  }

  

  calculateMasaCorporal() {
    if(this.formDto.peso === 0 || this.formDto.peso === null ) {
      return;
    }
    if(this.formDto.talla === 0 || this.formDto.talla === null ) {
      return;
    }
    let talla = this.formDto.talla / 100;
    this.formDto.indiceMasaCorporal =  parseFloat((this.formDto.peso / (talla * talla)).toFixed(2));
  }

  cleanOther(prop) {
    this.formDto[prop] = '';
  }

  isOtherCheked(propCkecked: string, propList: string) {
    let e = false;
    this[propCkecked].forEach( (value, index) => {

      if(this[propList][index] === 'Otro' && value === true) {
        e = true;
      }

    });
    return e;
  }


  formatDate(prop: string) {
    this[prop + 'String'] = moment(this[prop]).format('DD-MM-YYYY').toString();
  }

  calculateEdad($event) {
    var fechaNace = new Date(this.yearFechaNac + '-' + this.monthFechaNac + '-' + this.dayFechaNac);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    const edad = Math.floor(((<any>fechaActual - <any>fechaNace) / (1000 * 60 * 60 * 24) / 365));
    this.formDto.edad = edad;
    this.formatDate('fechaNacimiento');
  }

  

  scrollInit() {
    window.scroll(0, 0);
  }

  private getCheckBoxs() {

    let riesgoParaMedicosArray = this.formDto.riesgoParaMedicos.split(',');
    let enfermedadesPadeceArray = this.formDto.enfermedadesPadece.split(',');
    let medicamentosPorEnfermedadArray = this.formDto.medicamentosPorEnfermedad.split(',');
    let escalaTensionFamiliarArray = this.formDto.escalaTensionFamiliar.split(',');
    let estadoSaludActualArray = this.formDto.estadoSaludActual.split(',');
    let medicamentosConsumidosArray = this.formDto.medicamentosConsumidos.split(',');
    let vitaminasConsumidasArray = this.formDto.vitaminasConsumidas.split(',');
    let medicinaNaturistaConsumidaArray = this.formDto.medicinaNaturistaConsumida.split(',');

    this.riesgoParaMedicosChecked = [];
    this.enfermedadesPadeceChecked = [];
    this.medicamentosPorEnfermedadChecked = [];
    this.escalaTensionFamiliarChecked = [];
    this.estadoSaludActualChecked = [];
    this.medicamentosConsumidosChecked = [];
    this.vitaminasConsumidasChecked = [];
    this.medicinaNaturistaConsumidaChecked = [];

    

    riesgoParaMedicosArray.forEach( (value, index) => {
      this.lista15.forEach( (value1, index1) => {
        if(value==value1){
          this.riesgoParaMedicosChecked[index1] = true;
        }
      })
    });

    enfermedadesPadeceArray.forEach( (value, index) => {
      this.lista18.forEach( (value1, index1) => {
        if(value==value1){
          this.enfermedadesPadeceChecked[index1] = true;
        }
      })
    });

    medicamentosPorEnfermedadArray.forEach( (value, index) => {
      this.lista20.forEach( (value1, index1) => {
        if(value==value1){
          this.medicamentosPorEnfermedadChecked[index1] = true;
        }
      })
    });

    escalaTensionFamiliarArray.forEach( (value, index) => {
      this.lista40.forEach( (value1, index1) => {
        if(value==value1){
          this.escalaTensionFamiliarChecked[index1] = true;
        }
      })
    });

    estadoSaludActualArray.forEach( (value, index) => {
      this.lista42.forEach( (value1, index1) => {
        if(value==value1){
          this.estadoSaludActualChecked[index1] = true;
        }
      })
    });

    medicamentosConsumidosArray.forEach( (value, index) => {
      this.lista55.forEach( (value1, index1) => {
        if(value==value1){
          this.medicamentosConsumidosChecked[index1] = true;
        }
      })
    });

    vitaminasConsumidasArray.forEach( (value, index) => {
      this.lista57.forEach( (value1, index1) => {
        if(value==value1){
          this.vitaminasConsumidasChecked[index1] = true;
        }
      })
    });

    medicinaNaturistaConsumidaArray.forEach( (value, index) => {
      this.lista60.forEach( (value1, index1) => {
        if(value==value1){
          this.medicinaNaturistaConsumidaChecked[index1] = true;
        }
      })
    }); 
  }

  inicialiceFechaNac(date: string) {
    const dia = moment(date).format('DD').toString();
    const mes = moment(date).format('MM').toString()
    const anio = moment(date).format('YYYY').toString()
    this.dayFechaNac = dia;
    this.monthFechaNac = mes;
    this.yearFechaNac = anio;
  }

  inicialiceFechaTomaMuestra(date: string) {
    const dia = moment(date).format('DD').toString();
    const mes = moment(date).format('MM').toString()
    const anio = moment(date).format('YYYY').toString()
    this.dayFechaTomaMuestra = dia;
    this.monthFechaTomaMuestra = mes;
    this.yearFechaTomaMuestra = anio;
  }
  
  inicialiceFechaUltimaMestruacion(date: string) {
    const dia = moment(date).format('DD').toString();
    const mes = moment(date).format('MM').toString()
    const anio = moment(date).format('YYYY').toString()
    this.dayFechaUltimaMestruacion = dia;
    this.monthFechaUltimaMestruacion = mes;
    this.yearFechaUltimaMestruacion = anio;
  }
  inicialiceFechaInicioSintomas(date: string) {
    const dia = moment(date).format('DD').toString();
    const mes = moment(date).format('MM').toString()
    const anio = moment(date).format('YYYY').toString()
    this.dayFechaInicioSintomas = dia;
    this.monthFechaInicioSintomas = mes;
    this.yearFechaInicioSintomas = anio;
  }
  isInternado() {
    let e = false;
    if(this.formDto.estadoActual === 'Internado' || this.formDto.estadoActual === 'No hubo respuesta' || this.formDto.estadoActual === 'Otro' || this.formDto.estadoActual === '') {
      e = true;
    }
    return e;
  }
}
