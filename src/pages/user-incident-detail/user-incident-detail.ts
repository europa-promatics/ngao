import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the UserIncidentDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-incident-detail',
  templateUrl: 'user-incident-detail.html'
})
export class UserIncidentDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UserIncidentDetailPage Page');
  }

}
