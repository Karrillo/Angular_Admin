import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';
// Components
import { AppComponent } from './app.component';

// Login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Module Pages
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
