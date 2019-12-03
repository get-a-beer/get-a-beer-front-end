import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { InternalAuthService } from '../../providers/auth.service';
import { Login } from '../../model/login';
import { Socialusers } from '../../model/socialUsers';
import { JwtToken } from 'src/app/model/jwtToken';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm;
  socialusers = new Socialusers();

  ngOnInit() {  
  }

  constructor(
    private auth: InternalAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public OAuth: AuthService  
  ){
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }
  
  onSubmit(loginData: Login){
    this.auth.login(loginData).subscribe(this.redirectHandler.bind(this), this.errorHandler.bind(this));
  }

  redirectHandler(data: JwtToken){
    localStorage.setItem('currentUser', data.access_token)
    this.router.navigate(['home']);
  }

  errorHandler(){
    Swal.fire({
      title: 'Oops!',
      text: 'Parece que houve um problema ao fazer login, tente novamente !',
      type: 'error'
    })
  }


  public socialSignIn(socialProvider: string) {  
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialProvider, socialusers);  
      console.log(socialusers);  
      //this.Savesresponse(socialusers); 
      this.router.navigate(['home']);
    });  
  }  

}
