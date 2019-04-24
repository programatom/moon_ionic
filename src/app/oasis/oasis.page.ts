import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BrowserService } from '../services/browser.service';

@Component({
  selector: 'app-oasis',
  templateUrl: './oasis.page.html',
  styleUrls: ['./oasis.page.scss'],
})
export class OasisPage implements OnInit {

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 3
  }

  constructor(private navCtrl: NavController,
              public browser: BrowserService) { }

  ngOnInit() {
  }
  dismiss(){
    this.navCtrl.navigateBack("/tabs/hotel-selection");
  }
}
