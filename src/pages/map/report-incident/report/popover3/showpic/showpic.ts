import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

/*
  Generated class for the Showpic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-showpic',
  templateUrl: 'showpic.html'
})
export class ShowpicPage {
images:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.images = this.navParams.get('images');
  }

  ionViewDidLoad() {
    console.log('Hello ShowpicPage Page');
  }

}
