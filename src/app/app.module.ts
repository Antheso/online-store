import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import {TopbarComponent} from './components/topbar/topbar.component';
import {CartService} from './services/cart.service';
import {CartPopupComponent} from './pages/cart/cart-popup/cart-popup.component';
import {ProductService} from './services/products.service';
import { ApiService } from './services/api.service';
import { Page404Component } from './components/page404/page404.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CartPopupComponent,
    Page404Component,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CartService,
    ProductService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
