import { Component, OnInit, Inject } from "@angular/core";
import { TechnicalSheetResult } from "app/services/data-seet/models/technical-sheet-result";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GetDataDto } from "app/services/recover-case/models/GetDataDto";
import { TechnicalSheetDto } from "app/services/data-seet/models/technical-sheet-dto";
import { DataSeetService } from "app/services/data-seet/data-seet.service";
import { RecoverCaseService } from "app/services/recover-case/recover-case.service";

@Component({
  selector: "app-dialog-recovery-case",
  templateUrl: "./dialog-recovery-case.component.html",
  styleUrls: ["./dialog-recovery-case.component.css"],
})
export class DialogRecoveryCaseComponent {
  isLoading = false;
  isSuccess = false;
  message =
    "Caso Asignado Correctamente, favor verifique los datos del paciente antes de iniciar la consulta.";
  idControl;
  urlSala = "";
  technicalSheetResult: TechnicalSheetResult[] = [];
  doctorId: number;
  caseId: number;
  observaciones = "";
  recetaMedica = "";
  observacionRequired = false;
  direccionRequired = false;
  recetaMedicaRequired = false;
  observacionMax = false;
  nombreInterno = "";
  nombreInternoRequired = false;
  nombreInternoMax = false;
  envioBrigada = false;
  direccionPaciente = "";
  isValid: boolean;
  contactoExitoso = false;
  casoAceptado = false;
  isValidUrl = false;

  constructor(
    public dialogRef: MatDialogRef<DialogRecoveryCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public item: GetDataDto,
    private recoverCasesService: RecoverCaseService,
    private dataSeetService: DataSeetService
  ) {
    dialogRef.disableClose = true;
    this.caseId = item.casoId;
    this.recoverCase();
  }

  onNoClick(): void {
    this.dialogRef.close("cancel");
  }
  onConfirmedClick(): void {
    this.dialogRef.close("accept");
  }

  generateRoom() {
    const request = new GetDataDto();
    request.casoId = this.caseId;
    this.recoverCasesService.generateRoom(request).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
          this.isValidUrl = false;
          // this.isSuccess = false;
          this.message = resp.message;
        } else {
          this.isValidUrl = true;
          // this.isSuccess = true;
          this.message = resp.body.message;
          this.caseId = resp.body.casoId;
          this.urlSala = resp.body.url;
          this.getTest();
        }
        this.isLoading = false;
      },
      (error) => {
        // console.log("no existen registros");
        this.isLoading = false;
      }
    );
  }

  recoverCase() {
    const request = new GetDataDto();
    request.casoId = this.caseId;
    this.recoverCasesService.recoverCase(request).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
          this.isValid = false;
          this.isSuccess = false;
          this.message = resp.message;
        } else {
          this.isValid = true;
          this.isSuccess = true;
          this.message = resp.body.message;
          this.caseId = resp.body.casoId;
          this.idControl = resp.body.controlId;
          this.urlSala = resp.body.url;
        }
        this.isLoading = false;
      },
      (error) => {
        // console.log("no existen registros");
        this.isLoading = false;
      }
    );
  }

  getTest() {
    const request = new TechnicalSheetDto();
    request.id = this.idControl;
    this.isLoading = true;
    this.dataSeetService.getTechnicalSheet(request).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
        } else {
          this.technicalSheetResult = resp.body;
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  openWindow() {
    window.open(this.urlSala, "_blank", "toolbar=0,width=700,height=550");
  }

  terminar() {
    this.dialogRef.close();
  }

  notContacted() {
    this.observaciones = "No contactado";
    this.recetaMedica = "Sin Receta";
    this.nombreInterno = "SN";
    this.finalice(true);
  }

  finalice(state) {
    this.observacionRequired = false;
    this.direccionRequired = false;
    this.recetaMedicaRequired = false;
    this.observacionMax = false;
    this.nombreInternoRequired = false;
    this.nombreInternoMax = false;
    const errors = [];
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
    /*if (this.observaciones.length > 600) {
      this.observacionMax = true;
      errors.push("error");
    }*/

    if (errors.length) {
      return;
    }
    let request: GetDataDto = new GetDataDto();
    request.casoId = this.caseId;
    request.finalizar = state;
    request.observaciones = this.observaciones;
    request.nombrePaciente = this.nombreInterno;
    request.envioBrigada = this.envioBrigada;
    request.direccionExplicita = this.direccionPaciente;
    request.recetaMedica = this.recetaMedica;
    this.isLoading = true;
    this.recoverCasesService.finalizeCase(request).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
        } else {
          this.dialogRef.close(resp.body);
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
