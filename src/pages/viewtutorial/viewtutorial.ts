import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Viewtutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewtutorial',
  templateUrl: 'viewtutorial.html'
})
export class ViewtutorialPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ViewtutorialPage Page');
  }

}
