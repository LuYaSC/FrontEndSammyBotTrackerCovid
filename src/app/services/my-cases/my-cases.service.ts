import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyCasesDto } from './models/my-cases-dto';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyCasesService {
  private baseUrl = environment.url.myCases;
  //private baseUrl = 'https://servicios.alliviapp.com:444/TelemedicineSBDev/api/Telemedicine/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) { }

  getListCases(request: MyCasesDto) {
    const url = this.baseUrl + 'GetPatientsAttended';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getListCasesInAwait(request: MyCasesDto) {
    const url = this.baseUrl + 'GetPendingAppointments';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getById(id) {
    const url = this.baseUrl + 'AssingCase';
    return this.http.post(url, {casoId:id}, {headers: this.httpHeader});
  }

  getListDoctor() {
    const url = this.baseUrl + 'GetListDoctor';
    return this.http.post(url, null, {headers: this.httpHeader});
  }
  addingDoctor(request: any) {
    const url = this.baseUrl + 'AddingDoctor';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  updateCase(request: any) {
    const url = this.baseUrl + 'UpdateCase';
    return this.http.post(url, request, {headers: this.httpHeader});
  }
}
