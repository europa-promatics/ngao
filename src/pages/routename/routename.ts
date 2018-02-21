import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Routename page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-routename',
  templateUrl: 'routename.html'
})
export class RoutenamePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RoutenamePage Page');
  }

}
