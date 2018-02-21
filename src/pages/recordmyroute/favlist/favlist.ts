import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import{TrackcurrentPage}from'./trackcurrent/trackcurrent';

import { WebserviceUrl } from '../../../providers/webservice-url';

/*
  Generated class for the Favlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favlist',
  templateUrl: 'favlist.html'
})
export class FavlistPage {
pk;
   http;
   data;
   user_id;
   first_name;
   source_name;
   s;
   d;
   routes;
  constructor(public navCtrl: NavController,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController) {
  	this.data={};
     this.data.response='';
     this.http = http;
  
  }
  ngOnInit() {
	let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
	
  	var link = this.web.webservice+'webserviceuser_route';
        var data = JSON.stringify({
         user_id: localStorage['pk'], 
         });
    
         this.http.post(link, data)
         .subscribe(data => {
         	
           console.log('hy'+data);
            console.log(data._body);
            console.log(JSON.parse(data._body).routes);
            // console.log(JSON.parse(data._body).routes[0].first_name);
            //      console.log(JSON.parse(data._body).routes[0].source_name);
            //       console.log(JSON.parse(data._body).routes[0].destination_name);
                  this.routes=JSON.parse(data._body).routes;
                   // localStorage['showmyroute']= this.routes;
                   // console.log(localStorage['showmyroute']);

                 // this.s=JSON.parse(data._body).routes[0].source_name;
                 // this.d=JSON.parse(data._body).routes[0].destination_name;
 loader.dismiss();
            
            
         }, error => {
             console.log(error);
               });
     console.log('hop');
  }

  ShowMyRoute(a)
  {

    this.navCtrl.push(TrackcurrentPage,{a:a});
    console.log(a);
   
  }

}
