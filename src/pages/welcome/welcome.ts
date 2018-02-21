import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{HomePage } from '../home/home';
import { LoginPage } from '../security/login/login';
import { DashboardPage } from '../dashboard/dashboard';
import { TabsPage } from '../tabs/tabs';


/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
	logpage;
	dashboard;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.logpage =LoginPage ;
  	this.dashboard= TabsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  itemTapped(event, item) {
    this.navCtrl.push(WelcomePage, {
      item: item
    });
  }

}
