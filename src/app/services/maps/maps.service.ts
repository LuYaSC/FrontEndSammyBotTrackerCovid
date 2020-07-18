import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MapsService {
  private baseUrl =
    'https://servicios.alliviapp.com:444/DoctorVirtual.Georreferenciacion.Api/Api/Georreferenciacion/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    /*Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')*/
  });

  constructor(public http: HttpClient) {}

  getLocations() {
    //return this.http.post(this.getLocationsUrl, data, {headers: this.httpHeader});
    return this.http.post(this.baseUrl, null /*, {headers: this.httpHeader}*/);
  }

  getLocationsByTime(time: any) {
    const url = this.baseUrl + 'ActualizarQuery?timestamp=' + time;
    return this.http.post(url, null /*, {headers: this.httpHeader}*/);
  }
}
