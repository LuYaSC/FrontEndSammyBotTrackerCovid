import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { GetUserDto } from './models/get-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private baseUrl = environment.url.administration;
  //private baseUrl = 'https://servicios.alliviapp.com:444/RecoverCaseSB/api/RecoverCase/';
  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + localStorage.getItem('ACCESS_TOKEN')
  });

  constructor(public http: HttpClient) { }

  createUser(dto: GetUserDto) {
    const url = this.baseUrl + 'CreateUser';
    return this.http.post(url, dto, { headers: this.httpHeader });
  }

  getListUsers(dto: GetUserDto) {
    const url = this.baseUrl + 'GetListUsers';
    return this.http.post(url, dto, { headers: this.httpHeader });
  }

  getUserId(dto: GetUserDto) {
    const url = this.baseUrl + 'GetUserId';
    return this.http.post(url, dto, { headers: this.httpHeader });
  }

  changeStateUser(dto: GetUserDto) {
    const url = this.baseUrl + 'ChangeStateUser';
    return this.http.post(url, dto, { headers: this.httpHeader });
  }

  deleteUser(dto: GetUserDto) {
    const url = this.baseUrl + 'DeleteUser';
    return this.http.post(url, dto, { headers: this.httpHeader });
  }

  unlockAllUsers() {
    const url = this.baseUrl + 'UnlockAllUsers';
    return this.http.post(url, '', { headers: this.httpHeader });
  }
}
