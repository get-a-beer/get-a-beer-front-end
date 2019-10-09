import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { CervejaComponent } from './cerveja/cerveja.component';
import { CervejariaComponent } from './cervejaria/cervejaria.component';
import { VendaComponent } from './venda/venda.component';
import { Error404Component } from './error404/error404.component';
import { CaroseulComponent } from './caroseul/caroseul.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

import { ViaCepService } from './providers/viacep.service';
import { AuthService } from './providers/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent
    HeaderComponent,
    CervejaComponent,
    CervejariaComponent,
    VendaComponent,
    Error404Component,
    CaroseulComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ViaCepService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
