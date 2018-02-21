import { Component } from '@angular/core';
import { NavController,NavParams ,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../../../providers/webservice-url';
/*
  Generated class for the UserIncidentDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-incident-detail',
  templateUrl: 'user-incident-detail.html'
})
export class UserIncidentDetailPage {
	IncidentId;
	http;
   data;
   title;
   incidenttype;
    time;
    date;
    description;
    image1;
    image2;
    image3;
    image4;
  constructor(public navCtrl: NavController,public navparam:NavParams,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController) {
  	this.IncidentId=this.navparam.get('a');
  	console.log(this.IncidentId);
  	this.data={};
     this.data.response='';
     this.http = http;
  }

  // ionViewDidLoad() {
  //   console.log('Hello UserIncidentDetailPage Page');
  // }
 ionViewDidEnter() {
  	 let loader = this.loadingCtrl.create({
       content: "Please wait...",
        });
      loader.present();
  	var link = this.web.webservice+'webserviceincident_details';
        var data = JSON.stringify({
        report_id:this.IncidentId
         });
     
         this.http.post(link, data)
         .subscribe(data => {
         	
           console.log('hy'+data);
            console.log(data._body);
             console.log(JSON.parse(data._body).report.title);
          this.title=JSON.parse(data._body).report.title;
                 this.incidenttype=JSON.parse(data._body).report.incident_type;
                  this.time=JSON.parse(data._body).report.time;
               this.date=JSON.parse(data._body).report.date;
               this.description=JSON.parse(data._body).report.description;
                 this.image1=JSON.parse(data._body).report.image1;
        this.image2=JSON.parse(data._body).report.image2;
         this.image3=JSON.parse(data._body).report.image3;
           this.image4=JSON.parse(data._body).report.image4;
          loader.dismiss();
        }, error => {
             console.log(error);
               });
      
  }
}
