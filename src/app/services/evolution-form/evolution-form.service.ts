import { Injectable } from '@angular/core';
import { EvolutionFormDto } from './models/evolution-form-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ParamsDto } from './models/params-dto';

@Injectable({
  providedIn: 'root'
})
export class EvolutionFormService {

  private baseUrl = 'https://servicios.alliviapp.com:444/EvolutionForm/api/EvolutionForm/';
  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) {
    
  }

  save(request: EvolutionFormDto) {
    const url = this.baseUrl + 'SaveEvolutionForm';
    return this.http.post(url, request, {headers: this.httpHeader});
  }

  
  getHistoryClinics() {
    const url = this.baseUrl + 'GetHistoryClinics';
    return this.http.post(url, null, {headers: this.httpHeader});
  }

  getBasicData(numeroHistoria: string) {
    const url = this.baseUrl + 'GetBasicData';
    const request = {numeroHistoria: numeroHistoria};
    return this.http.post(url, request, {headers: this.httpHeader});
  }
  
  
}
