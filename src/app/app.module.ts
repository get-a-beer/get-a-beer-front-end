import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { CervejaComponent } from './cerveja/cerveja.component';
import { CervejariaComponent } from './cervejaria/cervejaria.component';
import { VendaComponent } from './venda/venda.component';
import { Error404Component } from './error404/error404.component';
import { CaroseulComponent } from './caroseul/caroseul.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CervejaComponent,
    CervejariaComponent,
    VendaComponent,
    Error404Component,
    CaroseulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
