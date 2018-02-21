import { Component } from '@angular/core';
import { NavController ,AlertController,LoadingController,NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../providers/webservice-url';
import{ListroutefavPage}from'../../listroutefav/listroutefav'
/*
  Generated class for the Addtofav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addtofav',
  templateUrl: 'addtofav.html'
})
export class AddtofavPage {
RouteName;
data;
http;
lnglatdata;
distancevscurrentspeed;
distancevsspeedlimit;



  constructor(public navParams:NavParams,public navCtrl: NavController,http: Http,public web:WebserviceUrl,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
this.data={};
        this.data.response='';
		this.http = http;
		this.RouteName='';
		localStorage['sd']='sd';
		localStorage['da']='da';
this.lnglatdata=this.navParams.get('lnglatdata')
this.distancevscurrentspeed=this.navParams.get('distancevscurrentspeed')
this.distancevsspeedlimit=this.navParams.get('distancevsspeedlimit')
// alert(this.lnglatdata+','+this.distancevscurrentspeed+','+this.distancevsspeedlimit)
 }
ionViewDidLoad()
{
let loader=this.loadingCtrl.create({
  content:"Data Saving..",
  duration:3000
});
loader.present();
}
goroute()
{

  // alert(localStorage['pk']+','+this.RouteName+','+JSON.stringify(this.lnglatdata)+','+JSON.stringify(this.distancevscurrentspeed)+','+JSON.stringify(this.distancevsspeedlimit))
	let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
	
  var link = this.web.webservice+'webservicereceive_info';
        var data = JSON.stringify({
         user_id: localStorage['pk'],
           routename:this.RouteName,
           lnglatdata:JSON.stringify(this.lnglatdata),
           distancevscurrentspeed:JSON.stringify(this.distancevscurrentspeed),
           distancevsspeedlimit:JSON.stringify(this.distancevsspeedlimit)  });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
             if(JSON.parse(data._body).response== false || JSON.parse(data._body).response== 'false'){
              let alert = this.alertCtrl.create({
                title: 'Well done!',
                subTitle: '“Driving Report Saved”',
                buttons: ['OK']
              });
              alert.present();
            }else{
              let alert = this.alertCtrl.create({
                title: 'Well done!',
                subTitle: '“Driving Report Saved”',
                buttons: [ {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.push(ListroutefavPage)
                  console.log('Ok clicked');
                }
              }]
              });
              alert.present();
            }
           
          
         }, error => {
             alert('bu'+JSON.stringify(error))
               loader.dismiss();
               });
}
 

}
