import { Component } from '@angular/core';
import { NavController,LoadingController , NavParams ,AlertController } from 'ionic-angular';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import  { Http } from '@angular/http';
import {UserIncidentDetailPage}from'./user-incident-detail/user-incident-detail';

/*
  Generated class for the Incidentdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-incidentdetails',
  templateUrl: 'incidentdetails.html'
})
export class IncidentdetailsPage {
a;
b;
 data;
  http;
  incidents;
  constructor(public navCtrl: NavController, http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController ,public navParams: NavParams,) {
  	   this.data = {};
     this.data.response = '';
      this.http = http;
  	  this.a = navParams.get('a');
  	  this.b=navParams.get('b');
     console.log(this.a);
     console.log(this.b);
  }

  ionViewDidLoad() {
    console.log('Hello IncidentdetailsPage Page');
  }
   ionViewDidEnter(){
  
   let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
  
  var link = this.web.webservice+'webserviceincident_search';
        var data = JSON.stringify({
    latitude:this.a,
    longitude:this.b
       

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
            console.log(JSON.parse(data._body).incidents);
             console.log(JSON.parse(data._body).incidents[0].report_id);
               this.incidents=JSON.parse(data._body).incidents;
          
          
         }, error => {
             console.log(error);
               loader.dismiss();
               });
}
// ShowMyReport()
// {
//   this.navCtrl.push(UserIncidentDetailPage);
// }
ShowMyReport(a)
  {

    this.navCtrl.push(UserIncidentDetailPage,{a:a});
    console.log(a);
   
  }
}
