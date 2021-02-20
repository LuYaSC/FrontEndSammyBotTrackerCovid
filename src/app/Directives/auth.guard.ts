import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AuthenticationService } from '../Services/users/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, /*private authenticationService: AuthenticationService*/) { }

    canActivate() {
        if (sessionStorage.getItem('userActual')) {
            this.IsTokenExpired();
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    private IsTokenExpired() {
        const user = JSON.parse(sessionStorage.getItem('userActual'));
        if (!user || user == null) {
           // this.authenticationService.logout();
        }
        const token = user.token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const data = JSON.parse(window.atob(base64));
        if ((Date.now() / 1000) > data.exp) {
            //this.authenticationService.logout();
        }
    }
}
