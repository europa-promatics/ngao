import { Component  } from '@angular/core';
import { NavController ,LoadingController, NavParams } from 'ionic-angular';
import { WebserviceUrl } from '../../../../../providers/webservice-url';
import  { Http } from '@angular/http';
/*
  Generated class for the AgentDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agent-detail',
  templateUrl: 'agent-detail.html'
})
export class AgentDetailPage {
	 data;
  http;
c;
name;
agenttype;
agentvehicle;
agentstatus;
agentinfo;
agentphoto;
a;
b;
  constructor( http: Http,public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController,public web:WebserviceUrl) {
  	    
  	    this.data = {};
  	   this.http = http;
  	 this.c = navParams.get('c');
  	 var k='their';
  	 this.a=k;
  	 console.log(this.a);
  	 console.log(this.c);
  }

   ionViewDidEnter(){
  
   let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
  
  var link = this.web.webservice+'webserviceagent_detail';
        var data = JSON.stringify({
   agent_id:this.c,
  
       

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
             console.log(JSON.parse(data._body).agent_detail.name);
             console.log(JSON.parse(data._body).agent_detail.agent_type);
             console.log(JSON.parse(data._body).agent_detail.agent_vehicle);
              console.log(JSON.parse(data._body).agent_detail.agent_status);
               console.log(JSON.parse(data._body).agent_detail.agent_info);
                 console.log(JSON.parse(data._body).agent_detail.photo);
                         this.name=JSON.parse(data._body).agent_detail.name;
                          this.agenttype=JSON.parse(data._body).agent_detail.agent_type;
                            this.agentvehicle=JSON.parse(data._body).agent_detail.agent_vehicle;
                             this.agentstatus=JSON.parse(data._body).agent_detail.agent_status;
                              this.agentinfo=JSON.parse(data._body).agent_detail.agent_info;
                               this.agentphoto=JSON.parse(data._body).agent_detail.photo;

         }, error => {
             console.log(error);
               loader.dismiss();
               });
}
up()
{

	var k='Their';
  	 this.a=k;
  	 console.log(this.a);
let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
  
  var link = this.web.webservice+'webservicerating';
        var data = JSON.stringify({
   agent_id:this.c,
     user_id: localStorage['pk'],
      rating:this.a
       

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
             

         }, error => {
             console.log(error);
               loader.dismiss();
               });
}
down()
{
	var l='Nottheir';
  	 this.b=l;
  	 console.log(this.b);
  	 let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
  
  var link = this.web.webservice+'webservicerating';
        var data = JSON.stringify({
   agent_id:this.c,
     user_id: localStorage['pk'],
      rating:this.b
       

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
             

         }, error => {
             console.log(error);
               loader.dismiss();
               });

}
}
