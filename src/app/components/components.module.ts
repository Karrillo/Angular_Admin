import { NgModule } from '@angular/core';

// Component Pages
import { IncrementComponent } from './increment/increment.component';
import { GraphicDoughnutComponent } from './graphic-doughnut/graphic-doughnut.component';


@NgModule({
    declarations: [
        IncrementComponent,
        GraphicDoughnutComponent
    ],
    exports: [
        IncrementComponent,
        GraphicDoughnutComponent
    ],
    imports: [
    ]
})

export class PagesModule {}
