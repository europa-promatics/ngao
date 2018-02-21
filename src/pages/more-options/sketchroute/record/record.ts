import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { LocationTracker } from '../../../../providers/location-tracker'
declare var google: any;
/*
  Generated class for the Record page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {

  constructor(public navCtrl: NavController,public locationTracker: LocationTracker) {



  }
 ionViewDidEnter()
 {

 	 this.locationTracker.startTracking();  
    
//  	var v1=localStorage['lat'];
// var v2=localStorage['lng'];
//  	alert(v1);
//  	alert(v2);
 }
 start()
 {
  var lat= this.locationTracker.lat;
  var lng=this.locationTracker.lng;
 	 alert(lat);
 	 alert(lng);
     var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mymap = new google.maps.Map(document.getElementById('mymap'), {
          zoom: 4,
          center: {lat: 30.5595, lng: 22.9375}
        });
       

        directionsDisplay.setMap(mymap);
      
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
 }

  stop(){
    this.locationTracker.stopTracking();
  }

}
