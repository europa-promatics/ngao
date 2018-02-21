import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Trackcurrent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trackcurrent',
  templateUrl: 'trackcurrent.html'
})
export class TrackcurrentPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TrackcurrentPage Page');
  }

}
