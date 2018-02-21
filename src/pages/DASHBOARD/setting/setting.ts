import { Component } from '@angular/core';
import { NavController,LoadingController} from 'ionic-angular';
import{ContactPage}from'../../contact/contact';
import { WebserviceUrl } from '../../../providers/webservice-url';
import  { Http } from '@angular/http';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
 Contact;
 notification:boolean
 http;
 control;
  constructor(public navCtrl: NavController,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController) {
    this.http=http
  	 this.Contact=ContactPage;





  }
  toggleNotification()
  {
    
if(this.notification==true)
{
  // localStorage["alert"]=0
  // alert(localStorage["alert"])

let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();

 var link = this.web.webservice+'webserviceuser_status';
        var data = JSON.stringify({

           user_id:localStorage['pk'],
      status:"on"
 });
         this.http.post(link, data)
         .subscribe(data => {
           loader.dismiss();
             
           console.log('hy'+data);
        }, error => {
          loader.dismiss();
             console.log(error);
        });

}
else if(this.notification==false){

let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();

 var link = this.web.webservice+'webserviceuser_status';
        var data = JSON.stringify({

           user_id:localStorage['pk'],
                 status:"off"
      
 });
         this.http.post(link, data)
         .subscribe(data => {
           loader.dismiss();
             
           console.log('hy'+data);
        }, error => {
          loader.dismiss();
             console.log(error);
        });



}


  }

  ionViewDidLoad() {


let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();

 var link = this.web.webservice+'webserviceget_status';
        var data = JSON.stringify({

           user_id:localStorage['pk']
      
 });
         this.http.post(link, data)
         .subscribe(data => {
           loader.dismiss();
           

             console.log(JSON.parse(data._body).status.auth)
             this.control=JSON.parse(data._body).status.auth

           if(this.control=="off")
           {
this.notification=false

           }
else {
    this.notification=true


}




           console.log('hy'+data);
        }, error => {
          loader.dismiss();
             console.log(error);
        });


    
  }

}
