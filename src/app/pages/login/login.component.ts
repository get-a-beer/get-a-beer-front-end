import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../providers/auth.service';
import { Login } from '../../model/login';
import { JwtToken } from 'src/app/model/jwtToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm;

  ngOnInit() {  
  }

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
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

}
