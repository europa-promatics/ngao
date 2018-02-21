

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { LocationTracker } from '../../../providers/location-tracker'
import { LoadingController } from 'ionic-angular';
declare var google: any;
/*
  Generated class for the Record2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-record2',
  templateUrl: 'record2.html'
})
export class Record2Page {

  constructor(public navCtrl: NavController,public locationTracker: LocationTracker,public loadingCtrl: LoadingController) {

  }
ionViewDidEnter()
{
	
this.hope();

}

hope(){
	 

	  this.locationTracker.startTracking();  
   
	 var lat= this.locationTracker.lat;
  var lng=this.locationTracker.lng;
 	 alert(lat);
 	 alert(lng);
     var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mymapo = new google.maps.Map(document.getElementById('mymapo'), {
          zoom: 4,
          center: {lat: 30.5595, lng: 22.9375}
        });

        var lat= this.locationTracker.lat;
  var lng=this.locationTracker.lng;
alert(lat);
        alert(lng);
        directionsDisplay.setMap(mymapo);
      
          directionsService.route({
          origin: new google.maps.LatLng(30.956602,75.853877),
           destination: new google.maps.LatLng(lat,lng),
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
          setTimeout(() => {
this.hope()
// loading.dismiss();
}, 5000);

}
stop(){
    this.locationTracker.stopTracking();
  }

}
