import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetDataDto } from './models/GetDataDto';

@Injectable({
  providedIn: 'root'
})
export class RecoverCaseService {

  private baseUrl = 'https://servicios.alliviapp.com:444/RecoverCasesSB/api/CasesRecovery/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) { }

  getCasesForRecovers(request: GetDataDto) {
    const url = this.baseUrl + 'GetCasesForRecovers';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  recoverCase(request: GetDataDto) {
    const url = this.baseUrl + 'RecoverCase';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  generateRoom(request: GetDataDto) {
    const url = this.baseUrl + 'GenerateRoom';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  finalizeCase(request: GetDataDto) {
    const url = this.baseUrl + 'FinalizeCase';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  /*getById(id) {
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
  }*/
}
