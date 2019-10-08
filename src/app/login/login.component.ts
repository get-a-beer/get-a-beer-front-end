import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginModel: Login;
  loginForm;

  ngOnInit() {  
  }

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
  ){
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }
  
  onSubmit(loginData: Login){
    //console.warn('Seu login foi:', loginData)
    this.auth.login(loginData).subscribe((data: Login) => this.loginModel = {...data});
    console.log(this.loginModel)
  }
}
