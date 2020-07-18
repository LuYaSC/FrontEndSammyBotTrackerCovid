import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  roles = [];
  isValid = false;

  verifyPermission(roles: string[]) {
    let newRoles = JSON.parse(localStorage.getItem('ROLES'));
    this.isValid = typeof newRoles === 'string';
    if (this.isValid) {
      this.roles.push(newRoles);
    } else {
      this.roles = newRoles;
    }
    let e = false;
    this.roles.forEach((value, index) => {
      roles.forEach((value1, index1) => {
        if(value === value1){
          e = true;
        }
      })
    })

    return e;
  }
}