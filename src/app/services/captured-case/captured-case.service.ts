import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GetDataDto } from '../captured-case/models/get-data-dto';
import { environment } from 'environments/environment';
import { PreviousCaseDto } from './models/previous-case-dto';
@Injectable({
  providedIn: 'root'
})
export class CapturedCaseService {
  private baseUrl = environment.url.capturedCase;
  //private baseUrl = 'https://servicios.alliviapp.com:444/RecoverCaseSB/api/RecoverCase/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) { }

  capturedCase(request: GetDataDto) {
    const url = this.baseUrl + 'CreateCase';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getHistoricalCase(request: PreviousCaseDto) {
    const url = this.baseUrl + 'GetPreviousCase';
    return this.http.post(url, request, {headers: this.httpHeader});
  }
}
