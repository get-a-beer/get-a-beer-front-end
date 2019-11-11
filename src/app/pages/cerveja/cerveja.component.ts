import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {

  constructor() { }
  images = ["product03_p9gojs", "product02_usctfi", "product01_xe6vs5"].map((n) => `https://res.cloudinary.com/getabeer/image/upload/${n}`);
  ngOnInit() {
  }

}
