import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetPatientsDto } from './models/get-patients-dto';
import { TechnicalSheetDto } from './models/technical-sheet-dto';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSeetService {
  private baseUrl = environment.url.dataSeet;
  //private baseUrl = 'https://servicios.alliviapp.com:444/Pacientes/api/Patient/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) {
  }

  getPatients(request: GetPatientsDto) {
    const url = this.baseUrl + 'GetPatients';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getTechnicalSheet(request: TechnicalSheetDto) {
    const url = this.baseUrl + 'GetTechnicalSheet';
    return this.http.post(url, request, {headers: this.httpHeader});
  }
  confirmedTest(request: TechnicalSheetDto) {
    const url = this.baseUrl + 'ConfirmedTest';
    return this.http.post(url, request, {headers: this.httpHeader});
  }
}
