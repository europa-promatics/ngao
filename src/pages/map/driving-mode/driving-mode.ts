import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import  { Http } from '@angular/http';
import { LocationTracker } from '../../../providers/location-tracker'
import {SpeedPage}from'./speed/speed';
import { PopoverController } from 'ionic-angular';
/*
  Generated class for the DrivingMode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;
@Component({
  selector: 'page-driving-mode',
  templateUrl: 'driving-mode.html'
})
export class DrivingModePage {
  //   @ViewChild('map') mapElement: ElementRef;
  // Incident;
  // map : any ; 
  // latLng : any ;
  //  lat;
  //   lng;
  //    http;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DrivingModePage');
  // }
 
constructor(public navCtrl: NavController, public navParams: NavParams, public locationTracker: LocationTracker,public popoverCtrl: PopoverController) {}

 ionViewDidLoad(){
   // this.initMap();
    // this.loadMap();
    // console.log('ionViewDidLoad ReportIncidentPage');
  }
 loadMap(){
 
    // Geolocation.getCurrentPosition().then((position) => {
    //   console.log(position)
    //   this.lat=position.coords.latitude;
    //   this.lng=position.coords.longitude;
    //      let mapEle = document.getElementById('mappp');
    //   this.map = new google.maps.Map(mapEle,{
    //   center: {lat:position.coords.latitude, lng: position.coords.longitude},
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
 
    // });


    //    google.maps.event.addListenerOnce(this.map, 'idle', () => {
    //   mapEle.classList.add('show-map');
    //   google.maps.event.trigger(mapEle, 'resize');
    // });
       // let latlan = this;
       // this.addMarker(position.coords.latitude,position.coords.longitude);

    //     this.map.addListener('click', function(event){
    //       console.log(event);
    //      latlan.abc=event.latLng;
    //      latlan.addMarker();
      
    // });
 
    // }, (err) => {
    //   console.log(err);
    // });
 
  }
  //  start(){
  //   this.locationTracker.startTracking();
  // }
 
  // stop(){
  //   this.locationTracker.stopTracking();
  // }
speed()
{
  // let popover = this.popoverCtrl.create(SpeedPage);
  //   popover.present();
}
getItems(ev)
{
  
}


 // initMap() {
 //        var directionsDisplay = new google.maps.DirectionsRenderer;
 //        var directionsService = new google.maps.DirectionsService;
 //        var map = new google.maps.Map(document.getElementById('map'), {
 //          zoom: 7,
 //          center: {lat: 41.85, lng: -87.65}
 //        });
 //        directionsDisplay.setMap(map);
 //        directionsDisplay.setPanel(document.getElementById('right-panel'));

 //        var control = document.getElementById('floating-panel');
 //        control.style.display = 'block';
 //        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

 //        var onChangeHandler = function() {
 //      var start = document.getElementById('start').value;
 //        var end = document.getElementById('end').value;
 //        directionsService.route({
 //          origin: start,
 //          destination: end,
 //          travelMode: 'DRIVING'
 //        }, function(response, status) {
 //          if (status === 'OK') {
 //            directionsDisplay.setDirections(response);
 //          } else {
 //            window.alert('Directions request failed due to ' + status);
 //          }
 //        });
 //        };
 //        document.getElementById('start').addEventListener('change', onChangeHandler);
 //        document.getElementById('end').addEventListener('change', onChangeHandler);
 //      }




}