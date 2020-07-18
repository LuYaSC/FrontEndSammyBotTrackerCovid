import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { EvolutionFormDto } from '../../services/evolution-form/models/evolution-form-dto';
import { EvolutionFormService } from '../../services/evolution-form/evolution-form.service';
import { HistoryClinicsDto } from '../../services/evolution-form/models/history-clinics-dto';
import { FormDiagDto } from '../../services/traking-form/models/form-diag-dto';
import { TrakingFormService } from '../../services/traking-form/traking-form.service';
import { ParamsDto } from '../../services/traking-form/models/params-dto';
import { EvolutionBasicDataDto } from '../../services/evolution-form/models/evolution-basic-data-dto';
import { MatStepper } from '@angular/material/stepper';
import { DialogErrorsComponent } from '../../components/dialog-errors/dialog-errors.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-evolution-form',
  templateUrl: './evolution-form.component.html',
  styleUrls: ['./evolution-form.component.css'],
  providers: [EvolutionFormService, TrakingFormService]
})
export class EvolutionFormComponent implements OnInit, AfterContentInit {

  @ViewChild('stepper') private myStepper: MatStepper;
  
  formTrakingDto: FormDiagDto = new FormDiagDto();

  formDto: EvolutionFormDto = new EvolutionFormDto();
  nombreMedico = localStorage.getItem('USER_NAME');
  historyClinics:  HistoryClinicsDto[] = [];
  numeroHistoria = '';
  idForm: number = null;
  historyClinic: HistoryClinicsDto = new HistoryClinicsDto();
  basicData: EvolutionBasicDataDto = new EvolutionBasicDataDto();
  isLoading = false
  showFormTrakin = false;
  showForm = false;
  isSuccess = false;
  message = '';

  ayudaExternaChecked: Boolean[] = [];
  lista6: string[] = ['Contactado','Internado','No hubo respuesta','Otro',];
  lista8: string[] = ['Que le ayude cuando este en cama','Que le ayude a cocinar','A quien pueda pedir ayuda','Que le ayude en sus tareas de casa','Ninguna de las anteriores','Otro',];
  lista10: string[] = ['1','2','3','4','5',];
  lista11: string[] = ['Si','No',];
  lista12: string[] = ['1','2','3','4','5',];
  lista13: string[] = ['Si','No',];
  lista14: string[] = ['1','2','3','4','5',];
  lista15: string[] = ['Si','No',];
  lista16: string[] = ['Si','No',];
  lista17: string[] = ['37.4 °Centigrados o menos','Más de 37.4 °Centigrados','No sé',];
  lista18: string[] = ['Si','No',];
  lista19: string[] = ['Si','No',];
  lista20: string[] = ['Si','No',];
  lista21: string[] = ['Si','No','Todavia',];
  lista23: string[] = ['Si','No',];
  lista25 = [{value:'Si', text:'Si'},{value:'No', text:'No'}, {value:'NS', text:'No sé'}];
  lista26 = [{value:'Si', text:'Si'},{value:'No', text:'No'},{value:'TV',text:'Tal vez'}];
  lista28: string[] = ['Alta Clínica','Alta con 2 pruebas','Alta con 1 prueba','No esta dado de Alta',];

  title1 = 'Datos Iniciales';
  title2 = 'Evaluación de Apoyo Social Instrumental';
  title3 = 'Datos Clinicos Subjetivos';
  title4 = 'Datos Clínicos Objetivos';
  title5 = 'Adherencia al tratamiento';
  title6 = 'Oportunidad de donación de sangre';
  title7 = 'Oportunidad para hacer comentarios';
  title8 = 'Estado de Paciente';
  constructor(private evolutionFormService: EvolutionFormService,
    private trakingFormService: TrakingFormService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {    
    this.setHistoryClinics();
  }

  setHistoryClinics() {
    this.isLoading = true;
    this.evolutionFormService.getHistoryClinics().subscribe((res: any) => {
      //console.log(res)
      this.historyClinics = res.body;
      this.isLoading = false;
      if(this.historyClinics.length) {
        this.historyClinic = this.historyClinics[0];
        this.idForm = this.historyClinics[0].id;
      }
    }, error => {
      //console.log(error)
      this.isLoading = false;
    });
  }
  findBasicData() {
    this.isLoading = true;
    this.evolutionFormService.getBasicData(this.historyClinic.numeroHistoria).subscribe((res: any) => {
      this.basicData = res.body;
      this.formDto.idFormularioInicial = this.basicData.idFormularioInicial;
      this.formDto.dia = this.basicData.dia;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  findHistoryClinics() {
    this.historyClinics.forEach( (value, index) => {
      if(value.id === this.idForm) {
        this.historyClinic = value;
      }
    })
  }

  newForm() {
    if(this.idForm === null || typeof this.idForm === 'undefined') {
      return;
    }
    this.showFormTrakin = false;
    this.showForm = true;
    this.ayudaExternaChecked = [];
    this.findBasicData();
    this.myStepper.reset();
  }

  validateForm() {
    const form = new EvolutionFormDto();
    this.setCheckBoxs();
    const errors = form.saveValidate(this.formDto);
    
    if(errors.length){
      this.showErrors(errors);
      return;
    }
    this.saveForm();
  }

  saveForm() {
    if(this.formDto.alta=='Alta Clínica'||this.formDto.alta=='Alta con 2 pruebas'||this.formDto.alta=='Alta con 1 prueba') {
      this.formDto.cerrado = true;
    }

    this.isLoading = true;
    this.evolutionFormService.save(this.formDto).subscribe((res: any) => {
      this.isLoading = false;
      this.isSuccess = true;
      this.message = res.body;
      //console.log(res)
      if(res.isOk){
        this.showForm = false;
      }
      let r = setTimeout(() => {
        this.isSuccess = false;
        this.message = '';
      }, 10000);
    }, error => {
      this.isLoading = false;
    });
  }

  public getFormTrakingById() {
    if(this.idForm === null || typeof this.idForm === 'undefined') {
      return;
    }
    let idForm = 0;
    this.historyClinics.forEach( (value, index) => {
      if(value.id === this.idForm) {
        idForm = value.idForm;
      }
    })

    this.showForm = false;
    
    this.isLoading = true;
    //this.isDisabled = false;
    this.trakingFormService.getFormById(idForm).subscribe( (resp: any) => {
      this.isLoading = false;
      if(resp.isOk==true){
        this.showFormTrakin = true;
        this.formTrakingDto = resp.body;
      }
      
      //this.isDisableMatricula = true;
      //this.isDisabled = true;
      /*this.getCheckBoxs();
      this.inicialiceFechaNac(this.formDto.fechaNacimiento);
      this.inicialiceFechaTomaMuestra(this.formDto.fechaTomaMuestra);
      this.inicialiceFechaUltimaMestruacion(this.formDto.fechaUltimaMenstruacion);*/
    }, error => {
      this.isLoading = false;
    });
  }
  
  private setCheckBoxs() {
    this.formDto.ayudaExterna = '';

    this.ayudaExternaChecked.forEach( (value, index) => {
      if(value === true){
        this.formDto.ayudaExterna += this.lista8[index] + ',';
      }
    });

  }

  private getCheckBoxs() {

    const ayudaExternaArray = this.formDto.ayudaExterna.split(',');

    this.ayudaExternaChecked = [];

    ayudaExternaArray.forEach( (value, index) => {
      this.lista8.forEach( (value1, index1) => {
        if(value===value1){
          this.ayudaExternaChecked[index1] = true;
        }
      })
    });
  }

  showErrors(errors: string[]) {
    
    const dialogRef = this.dialog.open(DialogErrorsComponent, {
      width: '450px',
      data: errors
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.newForm();
    });
    
  }

  isInternado() {
    let e = false;
    if(this.formDto.estadoActual === 'Internado' || this.formDto.estadoActual === 'No hubo respuesta' || this.formDto.estadoActual === '') {
      e = true;
    }
    return e;
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
  isOtherChekedV2(propCkecked: string, propList: string, valor: string) {
    let e = false;
    this[propCkecked].forEach( (value, index) => {

      if(this[propList][index] === valor && value === true) {
        e = true;
      }

    });
    return e;
  }
  
}
