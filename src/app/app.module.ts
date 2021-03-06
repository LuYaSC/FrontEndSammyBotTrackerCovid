import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

import { NewFormComponent } from './views/new-form/new-form.component';

import { MaterialDesignModule } from './modules/material-design/material-design.module';
import { TrakingFormComponent } from './views/traking-form/traking-form.component';

import { DataSeetComponent } from './views/data-seet/data-seet.component';
import { MapsComponent } from './views/maps/maps.component';
import { EvolutionFormComponent } from './views/evolution-form/evolution-form.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { CaseInAwaitComponent } from './views/case-in-await/case-in-await.component';
import { MyCasesComponent } from './views/my-cases/my-cases.component';
import { RecoverCaseComponent } from './views/recover-case/recover-case.component';
import { CapturedCaseComponent } from './views/captured-case/captured-case.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormCreateCaseComponent } from './Views/captured-case/components/form-create-case/form-create-case.component';
import { DetailCapturedCaseComponent } from './Views/captured-case/components/detail-captured-case/detail-captured-case.component';
import { DirectivesModule } from './Directives/directives.module';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    MaterialDesignModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    DirectivesModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    LeafletModule,
    LeafletMarkerClusterModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    NewFormComponent,
    TrakingFormComponent,
    DataSeetComponent,
    MapsComponent,
    EvolutionFormComponent,
    CaseInAwaitComponent,
    MyCasesComponent,
    RecoverCaseComponent,
    CapturedCaseComponent,
    AdministrationComponent,
    FormCreateCaseComponent,
    DetailCapturedCaseComponent,
    SafePipe,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
