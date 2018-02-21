import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{SignupnextPage}from'../security/signupnext/signupnext'
import { WelcomePage } from '../welcome/welcome';
import{LoginPage}from'../security/login/login'
import{SignUpPage}from'../security/sign-up/sign-up'
/*
  Generated class for the Termsandconditions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-termsandconditions',
  templateUrl: 'termsandconditions.html'
})
export class TermsandconditionsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TermsandconditionsPage Page');
  }
Signupnext()
{
this.navCtrl.setRoot(WelcomePage)
}
signup()
{
	this.navCtrl.push(SignUpPage)
}
}
