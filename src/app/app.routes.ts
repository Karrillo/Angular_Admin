import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PagesComponent } from './pages/pages.component';

import { GraphicsComponent } from './pages/graphics/graphics.component';
import { NotpageComponent } from './shared/notpage/notpage.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graphics', component: GraphicsComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotpageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
