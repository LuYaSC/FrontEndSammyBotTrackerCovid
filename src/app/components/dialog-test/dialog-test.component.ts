import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TechnicalSheetResult } from "app/services/data-seet/models/technical-sheet-result";
import { MyCasesService } from "app/services/my-cases/my-cases.service";
import { DataSeetService } from "app/services/data-seet/data-seet.service";
import { TechnicalSheetDto } from "app/services/data-seet/models/technical-sheet-dto";
import { DoctorDto } from "app/services/my-cases/models/doctor-dto";
import { MyCasesResult } from "app/services/my-cases/models/my-cases-result";

@Component({
  selector: "app-dialog-test",
  templateUrl: "./dialog-test.component.html",
  styleUrls: ["./dialog-test.component.css"],
})
export class DialogTestComponent {
  isLoading = false;
  isSuccess = false;
  message =
    "Caso Asignado Correctamente, favor verifique los datos del paciente antes de iniciar la consulta.";
  idControl;
  urlSala = "";
  technicalSheetResult: TechnicalSheetResult[] = [];
  doctors: DoctorDto[] = [];
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

  constructor(
    public dialogRef: MatDialogRef<DialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) public item: MyCasesResult,
    private myCasesService: MyCasesService,
    private dataSeetService: DataSeetService
  ) {
    dialogRef.disableClose = true;
    this.caseId = item.casoId;
    this.asignationCase();
    this.getListDoctor();
  }

  onNoClick(): void {
    this.dialogRef.close("cancel");
  }
  onConfirmedClick(): void {
    this.dialogRef.close("accept");
  }

  isValid: boolean;

  asignationCase() {
    this.myCasesService.getById(this.caseId).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
          this.isValid = false;
          this.isSuccess = false;
          this.message = resp.message;
        } else {
          this.isValid = true;
          this.isSuccess = true;
          // this.message = resp.body.message;
          this.idControl = resp.body.idControl;
          this.urlSala = resp.body.urlSala;
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

  getTest() {
    let request = new TechnicalSheetDto();
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

  getListDoctor() {
    this.myCasesService.getListDoctor().subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
        } else {
          this.doctors = resp.body;
        }
      },
      (error) => {}
    );
  }

  messageDoctor: string;
  isValidDoctor = 3;

  addingDoctor() {
    let request = { casoId: this.caseId, doctorId: this.doctorId };
    this.myCasesService.addingDoctor(request).subscribe(
      (resp: any) => {
        if (resp.isOk === false) {
          this.isValidDoctor = 2;
          this.messageDoctor = resp.message;
        } else {
          this.isValidDoctor = 1;
          this.messageDoctor = resp.body;
        }
      },
      (error) => {}
    );
  }

  terminar() {
    this.dialogRef.close();
  }

  finalice(state) {
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
    /*if (this.observaciones.length > 600) {
      this.observacionMax = true;
      errors.push("error");
    }*/

    if (errors.length) {
      return;
    }
    let request = {
      casoId: this.caseId,
      finalizar: state,
      observaciones: this.observaciones,
      nombrePaciente: this.nombreInterno,
      envioBrigada: this.envioBrigada,
      direccionExplicita: this.direccionPaciente,
      recetaMedica: this.recetaMedica,
    };
    this.isLoading = true;
    this.myCasesService.updateCase(request).subscribe(
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
