import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CervejaComponent } from './cerveja/cerveja.component';
import { CervejariaComponent } from './cervejaria/cervejaria.component';
import { VendaComponent } from './venda/venda.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path: 'cervejas', component: CervejaComponent},
  {path: 'cervejas', component: CervejaComponent},
  {path: 'cervejarias', component: CervejariaComponent},
  { path: 'prevenda', component: VendaComponent},
  { path: '**', component: Error404Component},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
