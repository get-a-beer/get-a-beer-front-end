import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CervejariaComponent } from './pages/cervejaria/cervejaria.component';
import { VendaComponent } from './pages/venda/venda.component';
import { SignupCervejariaComponent } from './pages/signup-cervejaria/signup-cervejaria.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CreateProdutoComponent } from './pages/produtos/create-produto/create-produto.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  { path: 'cerveja/:id', component: CervejaComponent },
  { path: 'cervejarias', component: CervejariaComponent },
  { path: 'prevenda', component: VendaComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'venda-conosco', component: SignupCervejariaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent},
  { path: 'produtos/create', component: CreateProdutoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'pagamento', component: PagamentoComponent },
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
