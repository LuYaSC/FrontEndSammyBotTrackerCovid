import { Routes } from '@angular/router';

import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { DataSeetComponent } from '../../views/data-seet/data-seet.component';
import { MapsComponent } from '../../views/maps/maps.component';
import { NewFormComponent } from '../../views/new-form/new-form.component';
import { TrakingFormComponent } from '../../views/traking-form/traking-form.component';
import { EvolutionFormComponent } from '../../views/evolution-form/evolution-form.component';
import { AuthGuard } from '../../guards/auth.guard';
import { CaseInAwaitComponent } from '../../views/case-in-await/case-in-await.component';
import { MyCasesComponent } from '../../views/my-cases/my-cases.component';
import { RecoverCaseComponent } from 'app/views/recover-case/recover-case.component';
import { CapturedCaseComponent } from 'app/views/captured-case/captured-case.component';
import { AdministrationComponent } from 'app/views/administration/administration.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'my-cases',      component: MyCasesComponent, canActivate: [AuthGuard] },
    // { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'data-seet',        component: DataSeetComponent, canActivate: [AuthGuard] },
    { path: 'new-map',        component: MapsComponent, canActivate: [AuthGuard] },
    { path: 'case-in-await',        component: CaseInAwaitComponent, canActivate: [AuthGuard] },
    /*{ path: 'new-form',        component: NewFormComponent, canActivate: [AuthGuard] },
    { path: 'traking-form',        component: TrakingFormComponent, canActivate: [AuthGuard] },
    { path: 'evolution-form',        component: EvolutionFormComponent, canActivate: [AuthGuard] },*/
    { path: 'recover-case',        component: RecoverCaseComponent, canActivate: [AuthGuard] },
    { path: 'captured-case',        component: CapturedCaseComponent, canActivate: [AuthGuard] },
    { path: 'administration',        component: AdministrationComponent, canActivate: [AuthGuard] },
];
