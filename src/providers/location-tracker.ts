import { Injectable,NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
/*
  Generated class for the LocationTracker provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationTracker {
public watch: any;    
  public lat: number = 0;
  public lng: number = 0;
  public speed : number=0;
   public tsz: number = 0;
  public map:any;
  
  constructor(public zone: NgZone) {
 
  }
 
  startTracking() {
 
  // Background Tracking
 
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 20,
    distanceFilter: 10, 
    debug: true,
    interval: 2000 
  };
 
  BackgroundGeolocation.configure(
    (location) => {
 
    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude +',' +location.timestamp);
 
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
        this.tsz=location.timestamp;
     //ionViewDidLoad(this.lat,this.lng);
    });
 
   }, (err) => {
 
    console.log(err);
 
  }, config);
 
  // Turn ON the background-geolocation system.
  BackgroundGeolocation.start();
 
 
  // Foreground Tracking
 
  let options = {
    frequency: 3000, 
    enableHighAccuracy: true
  };
 
  this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
    console.log(position);
    console.log(position.coords.speed);
    console.log(position.timestamp);
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.speed = position.coords.speed;
        this.tsz=position.timestamp;
       localStorage['lan']=position.coords.latitude;
        localStorage['lng']=position.coords.longitude;
        console.log('losd'+localStorage['lan']);
           console.log(this.speed);
    //     // let mapEle = document.getElementById('map');
    //     this.map = new google.maps.Map(mapEle, {
    //   center: {lat:position.coords.latitude, lng: position.coords.longitude},
    //   zoom: 15
    // });

    // google.maps.event.addListenerOnce(this.map, 'idle', () => {
    //   mapEle.classList.add('show-map');
    //   google.maps.event.trigger(mapEle, 'resize');
    // });
    });
 
  });
 
}
  stopTracking() {
 
  console.log('stopTracking');
 
  BackgroundGeolocation.finish();
  this.watch.unsubscribe();
 
}
 
}