import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController,NavParams,ViewController } from 'ionic-angular';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import {Geolocation} from 'ionic-native';
declare var google: any;
/*
  Generated class for the Routename page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-routename',
  templateUrl: 'routename.html'
})
export class RoutenamePage {
RouteName;
data;
http;
a
b
c
d
sourceaddress


  constructor(public viewCtrl:ViewController,public navparam:NavParams,public navCtrl: NavController ,http: Http,public web:WebserviceUrl,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
         this.data={};
        this.data.response='';
		this.http = http;
		this.RouteName='';
    this.a=this.navparam.get('a')
this.b=this.navparam.get('b')
this.c=this.navparam.get('c')
this.d=this.navparam.get('d')
this.sourceaddress=this.navparam.get('sourceaddress')


console.log('source address'+this.sourceaddress)




  }
goroute()
{
let partial = {
           route_name:this.RouteName
              
    };
    let mandatoryFields: string[] = [];
    
      if (!partial.route_name) {
            mandatoryFields.push('Route Name');
        }
       
        if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
                .present();
            return;
        }










	let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
	
  var link = this.web.webservice+'webservicesave_route';
        var data = JSON.stringify({
         user_id: localStorage['pk'],
       // source_name: localStorage['sourceaddress'],
       source_name:this.sourceaddress,

         destination_name: localStorage['destinationaddress'],
        source_latitude:this.a,
          source_longitude:this.b,
          destination_latitude:this.c,
         destiantion_longitude:this.d,
           route_name:this.RouteName
         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
             if(JSON.parse(data._body).response== false || JSON.parse(data._body).response== 'false'){
              let alert = this.alertCtrl.create({
                title: 'Well done!',
                subTitle: 'Something Went Wrong!!',
                buttons: ['OK']
              });
              alert.present();
                this.viewCtrl.dismiss()
            }else{






              let alert = this.alertCtrl.create({
                title: 'Well done!',
                subTitle: 'Your Favourite Route is Added!!',
                buttons: [ {
                text: 'Ok',
                handler: data => {
                  
                  console.log('Ok clicked');
                }
              }]
              });
              alert.present();
                  this.viewCtrl.dismiss()
            }
           
          
         }, error => {
             console.log(error);
               loader.dismiss();
               });
}
  
  }


