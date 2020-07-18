import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogErrorsComponent } from './dialog-errors/dialog-errors.component';
import { DataSeetDialogComponent } from './data-seet-dialog/data-seet-dialog.component';
import { MaterialDesignModule } from '../modules/material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrakingFormDisabledComponent } from './traking-form-disabled/traking-form-disabled.component';
import { DialogTestComponent } from './dialog-test/dialog-test.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DialogComponent,
    DialogErrorsComponent,
    DataSeetDialogComponent,
    TrakingFormDisabledComponent,
    DialogTestComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TrakingFormDisabledComponent
  ]
})
export class ComponentsModule { }
