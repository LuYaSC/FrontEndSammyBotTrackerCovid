import { Injectable } from '@angular/core';
import { FormDiagDto } from './models/form-diag-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamsDto } from './models/params-dto';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrakingFormService {
  private baseUrl = environment.url.dataSeet;
  //private baseUrl = 'https://servicios.alliviapp.com:444/Patients/api/Patient/';
  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) {
    
  }

  save(request: FormDiagDto) {
    const url = this.baseUrl + 'SaveForm';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getFormPrevious(request: ParamsDto) {
    const url = this.baseUrl + 'GetFormPrevious';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  getFormById(id) {
    const url = this.baseUrl + 'GetFormById';
    let request = {formId: id};
    return this.http.post(url, request, {headers: this.httpHeader});
  }
}
