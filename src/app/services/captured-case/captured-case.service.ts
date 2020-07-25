import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GetDataDto } from '../recover-case/models/GetDataDto';

@Injectable({
  providedIn: 'root'
})
export class CapturedCaseService {

  private baseUrl = 'https://servicios.alliviapp.com:444/RecoverCaseSB/api/RecoverCase/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) { }

  getUniversities() {
    const url = this.baseUrl + 'GetUniversities';
    return this.http.post(url, '', {headers: this.httpHeader});
  }

  getInterns(request: GetDataDto) {
    const url = this.baseUrl + 'GetInterns';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  /*getCasesCaptured(request: GetDataDto) {
    const url = this.baseUrl + 'GetCasesForRecovers';
    return this.http.post(url, request, {headers: this.httpHeader});
  }*/
}
