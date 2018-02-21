import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{SignUpPage} from'../sign-up/sign-up';
import{SignupnextPage } from'../signupnext/signupnext'

/*
  Generated class for the Signupmoreinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signupmoreinfo',
  templateUrl: 'signupmoreinfo.html'
})
export class SignupmoreinfoPage {
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.data= {};
     this.data.inspection_description = '';
     this.data.self_inspection= '';
     this.data.registration_expiration ='';
     this.data.license_sticker='';
     this.data.brake_lights='';
     this.data.head_lights ='';
     this.data.front_signal='';
     this.data.rear_signal='';
     this.data.tinted_windows='';
     this.data.crack_windows='';


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupmoreinfoPage');
  }
  submit()
  {
    this.navCtrl.push(SignupnextPage,{
		inspection_description:this.data.inspection_description,
		self_inspection:this.data.self_inspection,
		registration_expiration:this.data.registration_expiration,
		license_sticker:this.data.license_sticker,
		brake_lights:this.data. brake_lights,
		head_lights:this.data.head_lights,
		front_signal:this.data.front_signal,
		rear_signal:this.data.rear_signal,
		tinted_windows:this.data.tinted_windows,
		crack_windows:this.data.crack_windows
     })
  }

}
