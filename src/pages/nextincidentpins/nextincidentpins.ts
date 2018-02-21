import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import{WebserviceUrl}from'../../providers/webservice-url';
import {Http}from'@angular/http';

/*
  Generated class for the Nextincidentpins page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nextincidentpins',
  templateUrl: 'nextincidentpins.html'
})
export class NextincidentpinsPage {
id
http
                                                                                        
reports1
title
date
times

officer_name1
officer_identity1

race1
gender1
age1
type_of_officer1
image1
image2
image3
image4
incident1
incident_reason1
ticket1
citation1
fine1
arrest1
charge1
jail_time1
property_damage1
damage1
property_confiscation1
property_taken1
total_lost1
warning1
death1
injury1
describe_injury1
injury_reason1
posshow:boolean





  constructor(http:Http,public navCtrl: NavController,public navparams:NavParams,public web:WebserviceUrl,public loadingCtrl:LoadingController) {
this.http=http;

this.id=this.navparams.get("inciid")
// alert(this.id)

this.posshow=false

  }

  ionViewDidLoad() {
   let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webservicereport_data';
        var data = JSON.stringify({

report_id:this.id
  });

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();

               
                console.log(JSON.parse(data._body). report_incidents);
                     console.log(JSON.parse(data._body). report_incidents.title);

                      console.log(JSON.parse(data._body). report_incidents.time);

                        console.log(JSON.parse(data._body). report_incidents.date);
                          console.log(JSON.parse(data._body).report_incidents.reports);
                              console.log(JSON.parse(data._body).report_incidents.reports);
                               console.log(JSON.parse(data._body).report_incidents.image1);
                                console.log(JSON.parse(data._body).report_incidents.image2);
                                 console.log(JSON.parse(data._body).report_incidents.image3);
                                  console.log(JSON.parse(data._body).report_incidents.image4);



 console.log(JSON.parse(data._body).report_incidents.title);
                                console.log(JSON.parse(data._body).report_incidents.time);
                                 console.log(JSON.parse(data._body).report_incidents.date);
                                  console.log(JSON.parse(data._body).report_incidents.description);




 console.log(JSON.parse(data._body).report_incidents.officer_name);
                                console.log(JSON.parse(data._body).report_incidents.officer_identity);
                                 console.log(JSON.parse(data._body).report_incidents.race);
                                  console.log(JSON.parse(data._body).report_incidents.gender);


 console.log(JSON.parse(data._body).report_incidents.age);
                                 console.log(JSON.parse(data._body).report_incidents.type_of_officer);
                                  console.log(JSON.parse(data._body).report_incidents.reports);


this.reports1=JSON.parse(data._body).report_incidents.reports
this.title=JSON.parse(data._body). report_incidents.title
this.date=JSON.parse(data._body).report_incidents.date
this.times=JSON.parse(data._body).report_incidents.time

this.officer_name1=JSON.parse(data._body).report_incidents.officer_name
this.officer_identity1=JSON.parse(data._body).report_incidents.officer_identity

this.race1=JSON.parse(data._body).report_incidents.race

this.gender1=JSON.parse(data._body).report_incidents.gender

this.age1=JSON.parse(data._body).report_incidents.age

this.type_of_officer1=JSON.parse(data._body).report_incidents.type_of_officer







this.image1=JSON.parse(data._body).report_incidents.image1
this.image2=JSON.parse(data._body).report_incidents.image2
this.image3=JSON.parse(data._body).report_incidents.image3
 this.image4=JSON.parse(data._body).report_incidents.image4   


this.incident1=JSON.parse(data._body).report_incidents.incident
this.incident_reason1=JSON.parse(data._body).report_incidents.incident_reason
this.ticket1=JSON.parse(data._body).report_incidents.ticket
this.citation1=JSON.parse(data._body).report_incidents.citation
this.fine1=JSON.parse(data._body).report_incidents.fine
this.arrest1=JSON.parse(data._body).report_incidents.arrest
this.charge1=JSON.parse(data._body).report_incidents.charge
this.jail_time1=JSON.parse(data._body).report_incidents.jail_time
this.property_damage1=JSON.parse(data._body).report_incidents.property_damage
this.damage1=JSON.parse(data._body).report_incidents.damage
this.property_confiscation1=JSON.parse(data._body).report_incidents.property_confiscation
this.property_taken1=JSON.parse(data._body).report_incidents.property_taken
this.total_lost1=JSON.parse(data._body).report_incidents.total_lost
this.warning1=JSON.parse(data._body).report_incidents.warning
this.death1=JSON.parse(data._body).report_incidents.death
this.injury1=JSON.parse(data._body).report_incidents.injury
this.describe_injury1=JSON.parse(data._body).report_incidents.describe_injury
this.injury_reason1=JSON.parse(data._body).report_incidents.injury_reason





                              if(JSON.parse(data._body).report_incidents.reports=="Positive")
                              {
                      
          this.posshow=true
                              }
                               else
                               {

                               }
         
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });


  }

}
