



import { Component } from '@angular/core';
import { NavController ,AlertController ,LoadingController} from 'ionic-angular';
import {EditaccountPage}from './editaccount/editaccount';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../providers/webservice-url';
import {TabsPage}from'../../tabs/tabs';

@Component({
  selector: 'page-useraccount',
  templateUrl: 'useraccount.html'
})
export class UseraccountPage {
 pk;
   http;
   data;
   user_id;
   name;
   aboutu;
   age;
   address;
   first_name;
   image;
  constructor(public navCtrl: NavController,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  	this.data={};
     this.data.response='';
     this.http = http;
      console.log(localStorage['pk']);
      // alert(localStorage['pk'])
  
  }
  ionViewDidEnter(){

  // ngOnInit() {
     let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
     
  	var link = this.web.webservice+'/webserviceuser_detail';
        var data = JSON.stringify({
         user_id:localStorage['pk']
         // id:localStorage['pk']
         });
 console.log(localStorage['pk']);
         this.http.post(link, data)
         .subscribe(data => {
        loader.dismiss();
           console.log('hy'+data);
            console.log(data._body);
            console.log(JSON.parse(data._body).user_detail.first_name);
             console.log(JSON.parse(data._body).user_detail.about_you);
             console.log(JSON.parse(data._body).user_detail.age);
              console.log(JSON.parse(data._body).user_detail.address);
                this.name=JSON.parse(data._body).user_detail.first_name;
                 this.aboutu=JSON.parse(data._body).user_detail.about_you;
                  this.age=JSON.parse(data._body).user_detail.age;
               this.address=JSON.parse(data._body).user_detail.address;
               this.image=JSON.parse(data._body).user_detail.image;
              
               
         }, error => {
            loader.dismiss();
             console.log(error);
               });
     console.log('Hello UseraccountPage Page');
  }
edit()
{
this.navCtrl.push(EditaccountPage);
}

}
