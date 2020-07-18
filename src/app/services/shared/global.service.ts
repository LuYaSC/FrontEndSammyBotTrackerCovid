import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { MessageModel, MessageType } from './models/message-model';



@Injectable()
export class GlobalService {
  private subject = new Subject<MessageModel>();
  private subjectLoader = new Subject<boolean>();

  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clearMessage();
        }
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getLoader(): Observable<any> {
    return this.subjectLoader.asObservable();
  }

  success(summary: string, detail: string, isModalContainer = false, keepAfterRouteChange = false) {
    this.showMessage(MessageType.Success, summary, detail, isModalContainer, keepAfterRouteChange);
  }

  danger(summary: string, detail: string, isModalContainer = false, keepAfterRouteChange = false) {
    this.showMessage(MessageType.Error, summary, detail, isModalContainer, keepAfterRouteChange);
  }

  info(summary: string, detail: string, isModalContainer = false, keepAfterRouteChange = false) {
    this.showMessage(MessageType.Info, summary, detail, isModalContainer, keepAfterRouteChange);
  }

  warning(summary: string, detail: string, isModalContainer = false, keepAfterRouteChange = false) {
    this.showMessage(MessageType.Warning, summary, detail, isModalContainer, keepAfterRouteChange);
  }

  private showMessage(type: MessageType, summary: string, detail: string, isModalContainer: boolean, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<MessageModel>{ 'type': type, 'summary': summary, 'detail': detail, 'isModalContainer': isModalContainer, 'isVisible': true });
  }

  showLoader(loading: boolean = false): void {
    this.subjectLoader.next(<boolean>(loading));
  }

  private clearMessage(): void {
    this.subject.next();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
