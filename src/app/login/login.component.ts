import { Component, OnInit } from '@angular/core';
import { ViaCepService } from '../providers/viacep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //private viacep: ViaCepService

  ngOnInit() {
    const viacep: ViaCepService;
  }

  login(){
    console.log(viacep.getCep(123));
  }
}
