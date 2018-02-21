import { Component ,OnInit} from '@angular/core';
import { NavController ,NavParams ,LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import {Geolocation} from 'ionic-native';
declare var google: any;
/*
  Generated class for the Trackcurrent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trackcurrent',
  templateUrl: 'trackcurrent.html'
})
export class TrackcurrentPage implements OnInit{
http;
   data;
   routeid;
val1;
val2;
val3;
val4;
  constructor(public navCtrl: NavController,public navparam:NavParams,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController) {
  	this.routeid=this.navparam.get('a');
console.log(this.routeid);
this.data={};
     this.data.response='';
     this.http = http;
  }

  ngOnInit() {
  	 let loader = this.loadingCtrl.create({
       content: "Please wait...",
        });
      loader.present();
  	var link = this.web.webservice+'webserviceshow_route';
        var data = JSON.stringify({
        route_id:this.routeid
         });
     
         this.http.post(link, data)
         .subscribe(data => {
         	
           console.log('hy'+data);
            console.log(data._body);
             console.log(JSON.parse(data._body).routes);
            console.log(JSON.parse(data._body).routes.source_longitude);
                 console.log(JSON.parse(data._body).routes.source_latitude);
                  console.log(JSON.parse(data._body).routes.destination_latitude);
                    console.log(JSON.parse(data._body).routes.destiantion_longitude);
                    console.log(JSON.parse(data._body).routes.source_name);
                  console.log(JSON.parse(data._body).routes.destination_name);
            this.val1=JSON.parse(data._body).routes.source_longitude;
            this.val2=JSON.parse(data._body).routes.source_latitude;
            this.val3=JSON.parse(data._body).routes.destination_latitude;
            this.val4=JSON.parse(data._body).routes.destiantion_longitude;
            var a1=this.val1;
          var a2=this.val2;
          var a3=this.val3;
          var a4=this.val4;
           var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mapetrack = new google.maps.Map(document.getElementById('mapetrack'), {
          zoom: 4,
          center: {lat: 30.5595, lng: 22.9375}
        });
       

        directionsDisplay.setMap(mapetrack);
      
          directionsService.route({
          origin: new google.maps.LatLng(a2,a1),
           destination: new google.maps.LatLng(a3,a4),
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
          } 
          else 
          {
            window.alert('Directions request failed due to ' + status);
          }
        });
          loader.dismiss();
        }, error => {
             console.log(error);
               });
      
  }

}
