import {RouterModule, Routes} from '@angular/router';
// Components Login and Register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NotpageComponent } from './shared/notpage/notpage.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotpageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
