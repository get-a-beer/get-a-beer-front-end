import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.css']
})

export class CarouselSectionComponent implements OnInit {

  images = ["hotdeal_bdr1nr", "hotdeal_vswwil"].map((n) => `https://res.cloudinary.com/getabeer/image/upload/${n}`);  
  ngOnInit() {
  }

}
