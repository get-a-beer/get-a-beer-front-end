import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
