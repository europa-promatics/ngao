import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Sketchroute page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sketchroute',
  templateUrl: 'sketchroute.html'
})
export class SketchroutePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SketchroutePage Page');
  }

}
