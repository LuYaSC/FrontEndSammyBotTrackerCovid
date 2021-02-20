import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CapturedCaseService } from 'app/services/captured-case/captured-case.service';
import { CreateCaseResult, PreviousAttention } from 'app/services/captured-case/models/create-case-result';
import { GetDataDto } from 'app/services/captured-case/models/get-data-dto';
import { PreviousCaseDto } from 'app/services/captured-case/models/previous-case-dto';
import { PreviousCaseResult } from 'app/services/captured-case/models/previous-case-result';
import { DataSeetService } from 'app/services/data-seet/data-seet.service';
import { TechnicalSheetDto } from 'app/services/data-seet/models/technical-sheet-dto';
import { TechnicalSheetResult } from 'app/services/data-seet/models/technical-sheet-result';
import { MyCasesService } from 'app/services/my-cases/my-cases.service';

@Component({
  selector: 'app-captured-case',
  templateUrl: './captured-case.component.html',
  styleUrls: ['./captured-case.component.css'],
  providers: [CapturedCaseService, DataSeetService]
})
export class CapturedCaseComponent implements OnInit {
  currentDate = new Date();
  isLoading = false;
  createCaseDto = new GetDataDto();
  responseCreateCase = new CreateCaseResult();
  isCreatedCase = false;
  message: string;
  listPreviousAttentions: PreviousAttention[] = [];
  previousCaseDto = new PreviousCaseDto();
  previousCaseResult = new PreviousCaseResult();
  previousCaseValid = false;
  technicalSheetDto: TechnicalSheetDto = new TechnicalSheetDto();
  technicalSheetResult: TechnicalSheetResult[] = [];
  technicalSheetValid = false;

  observaciones = "";
  recetaMedica = "";
  observacionRequired = false;
  direccionRequired = false;
  recetaMedicaRequired = false;
  observacionMax = false;
  nombreInterno = "";
  direccionPaciente = "";
  nombreInternoRequired = false;
  nombreInternoMax = false;
  envioBrigada = false;
  disabledEnd = false;
  validateMessgeEnd = false;
  phoneRequired = false;
  ciRequired = false;
  minPhone = false;

  constructor(private service: CapturedCaseService, public dialog: MatDialog, private dataSeetService: DataSeetService, private modalService: NgbModal, private myCasesService: MyCasesService) {
    this.createCaseDto.level = 2;
    this.createCaseDto.origin = 'Facebook';
    this.createCaseDto.phoneNumber = this.createCaseDto.documentNumber = '';
  }


  ngOnInit(): void {
  }

  createCase() {
    this.phoneRequired = false;
    this.ciRequired = false;
    this.minPhone = false;
    let errors = [];
    if (this.createCaseDto.phoneNumber === "" || this.createCaseDto.phoneNumber.trim() === "") {
      this.phoneRequired = true;
      errors.push("error");
    }
    if (this.createCaseDto.documentNumber === "" || this.createCaseDto.documentNumber.trim() === "") {
      this.ciRequired = true;
      errors.push("error");
    }
    if (this.createCaseDto.phoneNumber.length <= 3) {
      this.minPhone = true;
      errors.push("error");
    }
    if (errors.length) {
      return;
    }
    this.isLoading = true;
    this.service.capturedCase(this.createCaseDto).subscribe((resp: any) => {
      if (resp.isOk) {
        this.isLoading = false;
        this.isCreatedCase = true;
        this.responseCreateCase = resp.body;
        this.nombreInterno = resp.body.isInsurance ? resp.body.namePatient : '';
        if (!resp.body.isNewPatient) {
          if (resp.body.previousAttentions.length > 0) {
            this.listPreviousAttentions = resp.body.previousAttentions;
            this.previousCaseDto.caseId = this.listPreviousAttentions[0].caseId;
            this.previousCaseValid = true;
            this.getHistoricalCase();
          }
          if (resp.body.lastControlId !== 0) {
            this.technicalSheetDto.id = resp.body.lastControlId;
            this.technicalSheetValid = true;
            this.handleGetTechnicalSheet();
          }
        }

      } else {
        this.message = resp.message;
      }

    });
  }

  getHistoricalCase() {
    this.service.getHistoricalCase(this.previousCaseDto).subscribe((resp: any) => {
      if (resp.isOk) {
        this.previousCaseResult = resp.body;
      }
    });
  }

  handleSeeTecnical(content: any) {
    this.modalService.open(content, { size: "ls", centered: true });

  }

  handleGetTechnicalSheet() {
    if (this.technicalSheetDto.id != undefined) {
      this.dataSeetService.getTechnicalSheet(this.technicalSheetDto).subscribe((resp: any) => {
        this.technicalSheetResult = resp.body;
      }, error => {
        //console.log('no existen registros');
      });
    }
  }

  finalice(state: any) {
    this.observacionRequired = false;
    this.direccionRequired = false;
    this.recetaMedicaRequired = false;
    this.observacionMax = false;
    this.nombreInternoRequired = false;
    this.nombreInternoMax = false;
    let errors = [];
    if (this.nombreInterno === "" || this.nombreInterno.trim() === "") {
      this.nombreInternoRequired = true;
      errors.push("error");
    }
    if (this.observaciones === "" || this.observaciones.trim() === "") {
      this.observacionRequired = true;
      errors.push("error");
    }
    if (this.recetaMedica === "" || this.recetaMedica.trim() === "") {
      this.recetaMedicaRequired = true;
      errors.push("error");
    }
    if (
      this.envioBrigada &&
      (this.direccionPaciente === "" || this.direccionPaciente.trim() === "")
    ) {
      this.direccionRequired = true;
      errors.push("error");
    }

    if (this.nombreInterno.length > 60) {
      this.nombreInternoMax = true;
      errors.push("error");
    }
    if (this.observaciones.length > 600) {
      this.observacionMax = true;
      errors.push("error");
    }

    if (errors.length) {
      return;
    }
    let request = {
      casoId: this.responseCreateCase.caseId,
      finalizar: state,
      observaciones: this.observaciones,
      nombrePaciente: this.nombreInterno,
      envioBrigada: this.envioBrigada,
      direccionExplicita: this.direccionPaciente,
      recetaMedica: this.recetaMedica,
    };
    this.isLoading = true;
    this.disabledEnd = true;
    this.validateMessgeEnd = false;
    this.myCasesService.updateCase(request).subscribe(
      (resp: any) => {
        this.isLoading = false;
        if (resp.isOk) {
          this.disabledEnd = true;
          window.location.reload();
        } else {
          this.message = resp.message;
          this.disabledEnd = false;
          this.validateMessgeEnd = true;
        }
      },
      (error) => {
        this.isLoading = false;
        this.disabledEnd = false;
        this.validateMessgeEnd = true;
        this.message = error.message;
      }
    );
  }
}
