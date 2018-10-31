import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes
import { APP_ROUTES } from './app.routes';
// Components
import { AppComponent } from './app.component';
// Login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// Pages
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
// Shared
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NotpageComponent } from './shared/notpage/notpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraphicsComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotpageComponent,
    ProgressComponent,
    DashboardComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
