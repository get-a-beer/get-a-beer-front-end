import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CervejariaComponent } from './pages/cervejaria/cervejaria.component';
import { VendaComponent } from './pages/venda/venda.component';
//import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path: 'cervejas', component: CervejaComponent},
  {path: 'cervejarias', component: CervejariaComponent},
  { path: 'prevenda', component: VendaComponent},
  //{ path: '**', component: Error404Component},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
