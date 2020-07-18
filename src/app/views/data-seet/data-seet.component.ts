import { Component, OnInit } from '@angular/core';
import { GetPatientsDto } from 'app/services/data-seet/models/get-patients-dto';
import { DataSeetService } from 'app/services/data-seet/data-seet.service';
import { PatientsResult } from 'app/services/data-seet/models/patients-result';
import { TechnicalSheetDto } from 'app/services/data-seet/models/technical-sheet-dto';
import { TechnicalSheetResult } from 'app/services/data-seet/models/technical-sheet-result';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-data-seet',
  templateUrl: './data-seet.component.html',
  styleUrls: ['./data-seet.component.css'],
  providers: [DataSeetService]
})
export class DataSeetComponent implements OnInit {

  isSuccess = false;
  isLoading = false;
  filterType: number;
  patientsDto: GetPatientsDto = new GetPatientsDto();
  patientsResult: PatientsResult[] = [];

  dateSelected: number;
  technicalSheetDto: TechnicalSheetDto = new TechnicalSheetDto();
  technicalSheetResult: TechnicalSheetResult [] = [];
  totalTechnicalSheet = 0;
  isTest = false;
  showMessageError = false;
  message: string;

  constructor(private dataSeetService: DataSeetService) { }

  ngOnInit(): void {
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
      this.totalTechnicalSheet = this.technicalSheetResult.length;
    }, error => {
      this.isSuccess = false;
    });
  }

}
