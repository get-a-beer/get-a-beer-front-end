import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sigin', component: SiginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
