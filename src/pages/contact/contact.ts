import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController} from 'ionic-angular';
import{LoginPage}from'../security/login/login';
import { Http } from '@angular/http';
import {TabsPage}from'../tabs/tabs';
/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
back;
data;
email;
number;
message;
name;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public loadingCtrl: LoadingController) {
   // this.back=HomePage;
    this.data = {};
        this.data.name='';
         this.data.message='';
        this.data.number='';
         this.data.email='info@ngaosecurity.com'
         this.http = http;
         this.data.response = '';
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
   submit() {
    let loader = this.loadingCtrl.create({
       content: "Please wait...",
        });
       loader.present();
        var link = 'http://18.221.76.63/ngao/webservicecontact_us';
        var data = JSON.stringify({
          name:this.data.name,
          message:this.data.message,
          email:'info@ngaosecurity.com',
          number:this.data.number

        
       });
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data;
            loader.dismiss();
            alert('Your response has been recorded thanku!!');
          console.log('hy'+data);
          
            this.navCtrl.push(TabsPage);
        }, error => {
          loader.dismiss();
            console.log(error);
        });
  }

}
