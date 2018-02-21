import { Component } from '@angular/core';
import { NavController ,AlertController ,LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import{ListAgentPage} from'./list-agent/list-agent';
import{UseraccountPage} from'./useraccount/useraccount';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../providers/webservice-url';
import {ViewtutorialPage}from'./viewtutorial/viewtutorial';
import{SketchroutePage}from'./sketchroute/sketchroute';
import{RecordPage}from'./sketchroute/record/record';
import{Record2Page}from'./record2/record2';
import{Mytrack3Page}from'./mytrack3/mytrack3';
import{Mytrack4Page}from'./mytrack4/mytrack4';
import{ContactPage}from'../contact/contact';



/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
 // <button class="listitem" ion-item (click)="Sketchroute3()">Hope</button>
 //                  <button class="listitem" ion-item (click)="Sketchroute4()">Rate NGAO</button>
@Component({
  // selector: 'page-popover',
  // templateUrl: 'popover.html'
   template:`<ion-list no-lines class="list">
				      <button class="listitem" ion-item (click)="USERACCOUNT()">User Account</button>
				      <button class="listitem" ion-item (click)="VIEWTUTORIAL()">View Tutorial</button>
				      <button class="listitem" ion-item (click)="LISTAGENT()">List Agent</button>
             <button class="listitem" ion-item (click)="Contact()">Contact-Us</button>
			</ion-list>
			`
})
export class PopoverPage {
  pk;
  http;
  data;
  user_id;
  
   slides;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public loadingCtrl: LoadingController,public alertCtrl: AlertController,http: Http,public web:WebserviceUrl,) {
    this.data={};
    this.data.response='';
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('Hello PopoverPage Page');
    console.log( localStorage['pk']);
  }
  Sketchroute2()
  {
      
     
    this.navCtrl.push(Record2Page); 

  }
  Sketchroute3()
  {
this.navCtrl.push(Mytrack3Page);
  }
  Sketchroute4()
  {
   this.navCtrl.push(Mytrack4Page); 
  }
 LISTAGENT() {
 this.navCtrl.push(ListAgentPage,{})
    // this.viewCtrl.dismiss();
  }
  Sketchroute()
  {
    this.navCtrl.push(RecordPage);
  }
  Contact()
  {
    this.navCtrl.push(ContactPage);
  }
  VIEWTUTORIAL()

  {
    // let loader = this.loadingCtrl.create({
    //    content: "Please wait...",
    //     });
    //   loader.present();
   
    // var link = this.web.webservice+'webservicetutorials';
    //     var data = JSON.stringify({
         
    //      });
    
    //      this.http.post(link, data)
    //      .subscribe(data => {
            
    //        console.log('hy'+data);
    //         console.log(data._body);
    //        this.slides=JSON.parse(data._body).tutorials;
           this.navCtrl.push(ViewtutorialPage)
     //           console.log(this.slides);
     //        console.log();    
     //         loader.dismiss();
     //     }, error => {
     //         console.log(error);
     //          loader.dismiss();
     //           });
     // console.log('Hello UseraccountPage Page');
  
    
  }
  USERACCOUNT() {
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //    });
    //  loader.present();
    //  var link = this.web.webservice+'/webserviceuser_detail';
    //     var data = JSON.stringify({
    //      user_id: localStorage['pk'], 
    //     });
    //     this.http.post(link, data)
    //     .subscribe(data => {
    //       loader.dismiss();
    //      this.data.response = data;
 this.navCtrl.push(UseraccountPage);
        //   console.log('hy'+data);
        // }, error => {
        //   loader.dismiss();
        //     console.log(error);
        // });
// this.navCtrl.push(UseraccountPage,{})
 

    // this.viewCtrl.dismiss();
  }
}
