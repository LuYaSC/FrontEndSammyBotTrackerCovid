import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from './models/jwt-response';
import { User } from './models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetTokenDto } from './models/get-token-dto';
import { tap } from 'rxjs/operators'
import * as jwt_decode from 'jwt-decode';
import { TokenDecodeDto } from './models/token-decode-dto';
import { environment } from 'environments/environment';


@Injectable()
export class AuthService {
  base_url = environment.url.auth;
  //base_url = 'https://servicios.alliviapp.com:444/JwtAuthentication/oauth2';
  /*base_url = '
  ';*/
  authSubject = new BehaviorSubject(false);
  public token = '';
  getTokenDto: GetTokenDto = new GetTokenDto();
  private roles: string[] = [];

  constructor(public http: HttpClient) {}


  login(user: User): Observable<JwtResponse> {
    let request = `username=` + user.name + `&password=` + user.password;
    request += `&IpClient` + this.getTokenDto.IpClient + `&grant_type=password&client_id=f82e450ad49e4284a613ed9a4a5deb74`;
    return this.http.post<JwtResponse>(this.base_url + '/token',
      request).pipe(tap(
        (res: any) => {
          if (res) {
            let decode: TokenDecodeDto = jwt_decode(res.access_token);
            this.saveToken(res.access_token, decode.exp);
            this.saveDecodeToken(decode);
            localStorage.setItem('ROLES', JSON.stringify(decode.role));
          }
        }
      ));
  }


  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ESPIRES_IN');
    localStorage.removeItem('LOGIN_STATUS');
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('ROLES');
  }

  private saveToken(token: string, espiresIn: number): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('ESPIRES_IN', espiresIn + '');
    localStorage.setItem('LOGIN_STATUS', '1');
    this.token = token;
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  public getRoles() {
    return this.roles;
  }

  private saveDecodeToken(decode: TokenDecodeDto): void {
    localStorage.setItem('USER_NAME', decode.user_name);
  }

  chekLoginStatus(): boolean {
    const loginCookie = localStorage.getItem('LOGIN_STATUS');
    const expiresIn = localStorage.getItem('ESPIRES_IN');

    if (loginCookie === '1') {

      if (expiresIn === undefined) {
        return false;
      }

      const date = new Date(0);
      const tokenExpDate = date.setUTCSeconds(Number(expiresIn));

      if (tokenExpDate.valueOf() > new Date().valueOf()) {
        return true;
      }

      localStorage.removeItem('LOGIN_STATUS');
      return false;
    }
    return false;
  }

}
