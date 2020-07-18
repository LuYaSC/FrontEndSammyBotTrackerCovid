import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResponseSaveDto } from '../../services/traking-form/models/response-save-dto';
import { GetPatientsDto } from 'app/services/data-seet/models/get-patients-dto';
import { TechnicalSheetDto } from 'app/services/data-seet/models/technical-sheet-dto';
import { TechnicalSheetResult } from 'app/services/data-seet/models/technical-sheet-result';
import { DataSeetService } from 'app/services/data-seet/data-seet.service';

import { PatientsResult } from 'app/services/data-seet/models/patients-result';

@Component({
  selector: 'app-data-seet-dialog',
  templateUrl: './data-seet-dialog.component.html',
  styleUrls: ['./data-seet-dialog.component.css']
})
export class DataSeetDialogComponent {

  isSuccess = false;
  filterType = '1';
  patientsDto: GetPatientsDto = new GetPatientsDto();
  patientsResult: PatientsResult[] = [];
  isLoading = false;

  dateSelected: number;
  technicalSheetDto: TechnicalSheetDto = new TechnicalSheetDto();
  technicalSheetResult: TechnicalSheetResult [] = [];
  totalTechnicalSheet = 0;
  isTest = false;
  showMessageError = false;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<DataSeetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GetPatientsDto,
    private dataSeetService: DataSeetService) {
      dialogRef.disableClose = true;
      //console.log(data);
      this.patientsDto.ci = data.ci;
    }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  handleChangeFilter() { 
    this.patientsResult = [];
    this.totalTechnicalSheet = 0;
    this.technicalSheetResult = [];
    this.patientsDto = new GetPatientsDto();
    this.technicalSheetDto.observations = undefined;
    this.technicalSheetDto.isCancel = this.isTest = false;
  }

  handleSearchPatients() {
    this.isSuccess = false;
    if (this.patientsDto.ci !== '' || this.patientsDto.phone !== '') {
      this.isLoading = true;
      this.dataSeetService.getPatients(this.patientsDto).subscribe((resp:any) => {
        if (resp.body == null) {
          this.isSuccess = true;
          this.message = 'No se encontró ningun resultado.';
        } else {
          this.patientsResult = resp.body;
          this.showMessageError = this.patientsResult.length > 0 ? false : true;
        }
        this.isLoading = false;
      }, error => {
        //console.log('no existen registros');
        this.isLoading = false;
      });
    }
  }

  changeTechinalSheet() {
    this.totalTechnicalSheet = 0;
    this.technicalSheetResult = [];
  }

  handleGetTechnicalSheet() {
    if (this.technicalSheetDto.id != undefined) {
      this.dataSeetService.getTechnicalSheet(this.technicalSheetDto).subscribe((resp: any) => {
        this.technicalSheetResult = resp.body;
        this.totalTechnicalSheet = this.technicalSheetResult.length;
        this.showMessageError = this.totalTechnicalSheet > 0 ? false : true;
      }, error => {
        //console.log('no existen registros');
      });
    }
  }

  handleSaveTest() {
    this.isSuccess = false;
    this.technicalSheetDto.isCancel = this.isTest;
    this.dataSeetService.confirmedTest(this.technicalSheetDto).subscribe((resp: any) => {
      this.technicalSheetResult = resp.body;
      this.isSuccess = true;
      this.message = 'El registro se guardo correctamente.';
      this.totalTechnicalSheet = this.technicalSheetResult.length;
    }, error => {
      this.isSuccess = false;
    });
  }

}
