import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import{ RecordPage}from'./record/record';

declare var google: any;
/*
  Generated class for the Sketchroute page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sketchroute',
  templateUrl: 'sketchroute.html'
})
export class SketchroutePage {
lat;
lng;
mymap;
  constructor(public navCtrl: NavController) {}
 ionViewDidEnter(){
 
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
         let mymap = document.getElementById('mymap');
      this.mymap = new google.maps.Map(mymap,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });


       google.maps.event.addListenerOnce(this.mymap, 'idle', () => {
     mymap.classList.add('show-map');
      google.maps.event.trigger(mymap, 'resize');
    });
        console.log(this.lat);
    console.log(this.lng);
 localStorage['lat']=this.lat;
 localStorage['lng']=this.lng;
    }, (err) => {
      console.log(err);
    });

 
  }
   
  Record()
  {

this.navCtrl.push(RecordPage);
  }



// ionViewDidEnter()
// {
  
          
//            var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var mymap = new google.maps.Map(document.getElementById('mymap'), {
//           zoom: 4,
//           center: {lat: 30.5595, lng: 22.9375}
//         });
       

//         directionsDisplay.setMap(mymap);
      
//           directionsService.route({
//           origin: new google.maps.LatLng(30.954836,75.848635),
//            destination: new google.maps.LatLng(30.956602,75.853877),
//           travelMode: google.maps.DirectionsTravelMode.DRIVING
//         }, function(response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//             var route = response.routes[0];
//           } 
//           else 
//           {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
         
// }

}
