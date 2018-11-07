import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component Pages
import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Module Shared Component
import { SharedModule } from '../shared/shared.module';

// Routes Pages
import { PAGES_ROUTES } from './pages.routes';

// Components
import { IncrementComponent } from '../components/increment/increment.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        PagesComponent,
        GraphicsComponent,
        ProgressComponent,
        DashboardComponent,
        IncrementComponent,
        GraphicDoughnutComponent
    ],
    exports: [
        GraphicsComponent,
        ProgressComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
