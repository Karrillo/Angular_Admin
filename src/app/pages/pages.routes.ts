import {RouterModule, Routes} from '@angular/router';

// Components Pages Master
import { PagesComponent } from './pages.component';
// Components Children on Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent, data: {tittle: 'Dashboard'}},
        {path: 'progress', component: ProgressComponent, data: {tittle: 'Progress'}},
        {path: 'graphics', component: GraphicsComponent, data: {tittle: 'Graphics'}},
        {path: 'promises', component: PromisesComponent, data: {tittle: 'Promises'}},
        {path: 'rxjs', component: RxjsComponent, data: {tittle: 'Observable'}},
        {path: 'account', component: AccountSettingsComponent, data: {tittle: 'Account'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
