import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dashboardpopup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboardpopup',
  templateUrl: 'dashboardpopup.html'
})
export class DashboardpopupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DashboardpopupPage Page');
  }

}
