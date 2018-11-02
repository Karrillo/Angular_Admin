import { NgModule } from '@angular/core';

// Component Pages
import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Module Shared Component
import { SharedModule } from '../shared/shared.module';

// Routes Pages
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        GraphicsComponent,
        ProgressComponent,
        DashboardComponent
    ],
    exports: [
        GraphicsComponent,
        ProgressComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
