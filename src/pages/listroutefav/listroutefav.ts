import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import{Http}from'@angular/http'
import{AnalyzetrackPage}from'../../pages/analyzetrack/analyzetrack'

/*
  Generated class for the Listroutefav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listroutefav',
  templateUrl: 'listroutefav.html'
})
export class ListroutefavPage {
http;
routedatas;
  constructor(http:Http,public navCtrl: NavController,public loadCtrl:LoadingController) {

this.http=http;
  }

  ionViewDidLoad() {
let loader=this.loadCtrl.create({
	content:'Please wait..'

})
loader.present();
    
    var link='http://18.221.76.63/ngao/webserviceget_info';

     var data=JSON.stringify({
     	user_id:localStorage['pk']
     })
      this.http.post(link,data)
      .subscribe(data=>{
      	loader.dismiss();
      	console.log(data._body)
      	console.log('check'+JSON.parse(data._body).data[0].id)
      	this.routedatas=JSON.parse(data._body).data

      })


  }
  listroutenext(a,b,c,d)
  {
  	this.navCtrl.push(AnalyzetrackPage,{a:a,b:b,c:c,d:d})
  }

}
