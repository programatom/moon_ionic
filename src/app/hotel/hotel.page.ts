import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 3
  }


  constructor() {

    }


  ngOnInit() {

  }

}
