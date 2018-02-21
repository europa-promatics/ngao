import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController  } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { PopoverController} from 'ionic-angular';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import  { Http } from '@angular/http';
import {AgentDetailPage}from'./agent-detail/agent-detail';

declare var google;
/*
  Generated class for the AgentsOnMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agents-on-map',
  templateUrl: 'agents-on-map.html'
})
export class AgentsOnMapPage {
 @ViewChild('map') mapElement: ElementRef;
  map : any ; 
 latLng : any ;
  abc:any;
   data;
  http;
   webb;
    lat;
    lng;
    datavalue;
     markers: any = [];
     agent_id;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public popoverCtrl: PopoverController, http: Http,public web:WebserviceUrl) {
  	 this.data = {};
       this.datavalue = {};
       this.data.response = '';
        this.lat ='';
       this.lng = '';
        this.http = http;
        this.abc='';
  }

  ionViewDidEnter(){
    
     let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webserviceagent_details';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                // this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                  console.log(JSON.parse(data._body).agent_details);
                 this.datavalue=JSON.parse(data._body).agent_details;
                    console.log(this.datavalue);
                 this.loadMap();
              
                var i=0;
                
                
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });


    
    console.log('ionViewDidLoad ReportIncidentPage');
  }
   loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
         let mapEle = document.getElementById('mapagent');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });


      google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
        this.addMarker(this.lat,this.lng);
       
    
 
    }, (err) => {
      console.log(err);
    });
 
  }
  addMarker(a,b){
  
  let arr=[];
  let ar=[];
  let tit=[];
  let type=[];
  let agentid=[];
  let i:number=0;
  let j:number=0;
  let k:number=0;
  let l:number=0;
  // console.log(this.beaches.length)
    console.log(this.datavalue.length)

     for (let data of this.datavalue){

      arr[i]=data.latitude;
       ar[j]=data.longitude;
       tit[k]=data.title;
        agentid[l]=data.agent_id;
    
     console.log(arr);
     console.log(ar);
     console.log(agentid);
      let latLng = new google.maps.LatLng(arr[i], ar[j]);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng

    });
 
    this.markers.push(marker);
    let content = "<b>"+tit[k]+"</b>"; 
  
  this.addInfoWindow(marker,content ,arr[i],ar[j], agentid[l]);

     i++;
      j++;
      k++;  
 }

 
         }
   
  
addInfoWindow(marker, content,a,b,c){
  
 

 
  google.maps.event.addListener(marker, 'click', () => {
   // alert('sundar babaji');

   let popover = this.popoverCtrl.create(AgentDetailPage,{c:c});

   popover.present();
   console.log(a);
   console.log(b);
    console.log(c);
   




  });
}

}
