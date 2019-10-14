import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { CaroseulComponent } from './components/caroseul/caroseul.component';

import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CervejariaComponent } from './pages/cervejaria/cervejaria.component';
import { VendaComponent } from './pages/venda/venda.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupCervejariaComponent } from './pages/signup-cervejaria/signup-cervejaria.component';

import { ViaCepService } from './providers/viacep.service';
import { AuthService } from './providers/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CervejaComponent,
    CervejariaComponent,
    VendaComponent,
    Error404Component,
    CaroseulComponent,
    SignupCervejariaComponent
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
