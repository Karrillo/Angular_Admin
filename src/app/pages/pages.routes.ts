import {RouterModule, Routes} from '@angular/router';

// Components Pages Master
import { PagesComponent } from './pages.component';
// Components Children on Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graphics', component: GraphicsComponent},
        {path: 'account', component: AccountSettingsComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
