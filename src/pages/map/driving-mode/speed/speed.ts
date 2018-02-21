import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import  { Http } from '@angular/http';
import { LocationTracker } from '../../../../providers/location-tracker'
import { PopoverController } from 'ionic-angular';
/*
  Generated class for the Speed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speed',
  templateUrl: 'speed.html'
})
export class SpeedPage {

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker,public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('Hello SpeedPage Page');
  }
 start(){
    this.locationTracker.startTracking();
  }
 
 
  // stop(){
  //   this.locationTracker.stopTracking();
  // }
}
