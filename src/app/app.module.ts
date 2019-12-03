import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CervejariaComponent } from './pages/cervejaria/cervejaria.component';
import { VendaComponent } from './pages/venda/venda.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupCervejariaComponent } from './pages/signup-cervejaria/signup-cervejaria.component';

import { ViaCepService } from './providers/viacep.service';
import { InternalAuthService } from './providers/auth.service';
import { CervejariaService } from './providers/cervejaria.service';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutoService } from './providers/produto.service';
import { CreateProdutoComponent } from './pages/produtos/create-produto/create-produto.component';
import { ClienteService } from './providers/cliente.service';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { HeaderComponent } from './componets/header/header.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { CarouselSectionComponent } from './componets/carousel-section/carousel-section.component';
import { NewsletterComponent } from './componets/newsletter/newsletter.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PagService } from './providers/pag.service';
import { CartService } from './providers/cart.service';


import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  


export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('425530256897-0qu0fn0flutl6f99bq3p1tm7fbqahrc7.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
} 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CervejaComponent,
    CervejariaComponent,
    VendaComponent,
    Error404Component,
    SignupCervejariaComponent,
    ProdutosComponent,
    HomeComponent,
    CreateProdutoComponent,
    ProfileComponent,
    PagamentoComponent,
    HeaderComponent,
    NavigationComponent,
    CarouselSectionComponent,
    NewsletterComponent,
    FooterComponent,
    CheckoutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    ViaCepService,
    InternalAuthService,
    CervejariaService,
    ProdutoService,
    ClienteService,
    PagService,
    CartService,
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
