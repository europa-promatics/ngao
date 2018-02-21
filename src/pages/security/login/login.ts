import { Component } from '@angular/core';
import { NavController , NavParams , AlertController ,LoadingController } from 'ionic-angular';
import  { Http } from '@angular/http';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignUpPage } from '../sign-up/sign-up';
// import { DashboardPage } from '../../dashboard/dashboard';
import {TabsPage}from'../../tabs/tabs';
import{ContactPage}from'../../contact/contact';
import { WebserviceUrl } from '../../../providers/webservice-url';
import{TermsandconditionsPage}from'../../termsandconditions/termsandconditions'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  forgotPage;
  data;
  http;
  useremail;
  userpass;
  signupage;
   Contact;
   webb;
kk;
  constructor(public navCtrl: NavController,public navParams: NavParams, http: Http,
   public loadingCtrl: LoadingController,public alertCtrl: AlertController, public web:WebserviceUrl) {
  	 this.Contact=ContactPage;
      this.forgotPage =  ForgotPasswordPage;
      // this.signupage= SignUpPage;
      this.signupage=TermsandconditionsPage
    
        this.data = {};
        this.useremail = '';
        this.userpass='';
        this.data.response = '';
        this.http = http;
        // this.webb=web;
        
  }
 ngOnInit(){
   console.log(this.web.webservice);

 }
  itemTapped(event, item) {
    this.navCtrl.push(LoginPage, {
      item: item
    });
  }
  submit() {
    let partial = {
           email: this.useremail,
            password: this.userpass,
    };
      let mandatoryFields: string[] = [];
      if (!partial.email) {
            mandatoryFields.push('Email-Id');
        }
        if (!partial.password) {
            mandatoryFields.push('Password');
        }
        if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
                .present();
            return;
        }


        let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
       loader.present();
        var link = this.web.webservice+'webservicelogin';
        var data = JSON.stringify({email: this.useremail, password:this.userpass});
        
        this.http.post(link, data)
        .subscribe(data => {
          loader.dismiss();
         // this.data.response = data._body;
         console.log(data);
         console.log(data._body);
          console.log(JSON.parse(data._body).response);
           // console.log(JSON.parse(data._body).response.user_info[0].id);
          console.log(JSON.parse(data._body).user_info);
             
       console.log(JSON.parse(data._body).user_info.id);
        this.kk=JSON.parse(data._body).user_info.id;
        console.log(this.kk);
          localStorage['pk']=this.kk;
          console.log(localStorage['pk']);
                // alert(localStorage['pk'])

         if(JSON.parse(data._body).response== false || JSON.parse(data._body).response== 'false'){
              let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please enter correct details!',
                buttons: ['OK']
              });
              alert.present();
            }else{
              let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'You have login successfully!',
                buttons: [{
                text: 'Ok',
                handler: data => {
                   // this.navCtrl.push(DashboardPage);
                   this.navCtrl.push(TabsPage);

                  console.log('Ok clicked');
                }
              }]
              });
              alert.present();
            }

         
        }, error => {
          loader.dismiss();
            console.log("Oooops!");
        });
  }

}
