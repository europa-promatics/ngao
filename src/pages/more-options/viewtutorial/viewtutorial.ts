import { Component } from '@angular/core';
import { NavController,LoadingController,ViewController } from 'ionic-angular';
import { TabsPage }from '../../tabs/tabs';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../providers/webservice-url';

/*
  Generated class for the Viewtutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewtutorial',
  templateUrl: 'viewtutorial.html'
})
export class ViewtutorialPage {
http;
   data;
   slides;
  constructor(public ViewCtrl:ViewController,public navCtrl: NavController,http: Http,public web:WebserviceUrl, public loadingCtrl: LoadingController,) {
    this.data={};
     this.data.response='';
     this.http = http;
  }

  // slides = [
  //   {
  //     title: "Sketch Your Route!",
  //     description: "It <b>will show sketch your route</b> and give you the path from source to destination.",
  //     image: "assets/img/locate.png",
  //   },
  //   {
  //     title: "Current Location!",
  //     description: "<b>Get current location</b> on map and details of it. ",
  //     image: "assets/img/dashboard.png",
  //   },
  //   {
  //     title: "Report Incident!",
  //     description: " You can <b>Report an incident</b> when you face any issue and add to map",
  //     image: "assets/img/report-iincident.png",
  //   }


submit()
{
  this.ViewCtrl.dismiss()
	// this.navCtrl.setRoot(TabsPage );
  this.slides;
  console.log(this.slides);
  
}
 // ngOnInit() {
   ionViewDidEnter(){
   let loader = this.loadingCtrl.create({
       content: "Please wait...",
        });
      loader.present();
   
    var link = this.web.webservice+'webservicetutorials';
        var data = JSON.stringify({
         
         });
    
         this.http.post(link, data)
         .subscribe(data => {
            
           console.log('hy'+data);
            console.log(data._body);
           this.slides=JSON.parse(data._body).tutorials;
               console.log(this.slides);
            console.log();    
             loader.dismiss();
         }, error => {
             console.log(error);
              loader.dismiss();
               });
     console.log('Hello UseraccountPage Page');
  }

}
