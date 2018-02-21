import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import{FindRoutePage}from'../map/find-route/find-route';

declare var google: any;
/*
  Generated class for the Directroute page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-directroute',
  templateUrl: 'directroute.html'
})
export class DirectroutePage {
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
    @ViewChild('directionsPanel2') directionsPanel2: ElementRef;
  a
  b  
  c
  d
  constructor(public navCtrl: NavController,public navparam:NavParams,public viewCtrl:ViewController) {

this.a=this.navparam.get('a')
this.b=this.navparam.get('b')
this.c=this.navparam.get('c')
this.d=this.navparam.get('d')



// alert(this.a)
// alert(this.b)
// alert(localStorage['value3'])
// alert(localStorage['value4'])

  }

  ionViewDidLoad() {
     var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mapell1 = new google.maps.Map(document.getElementById('mapell1'), {
          zoom: 4,
          center: {lat: 30.5595, lng: 22.9375}
        });
       

        directionsDisplay.setMap(mapell1);
         directionsDisplay.setPanel(this.directionsPanel.nativeElement);


// directionsDisplay.setPanel(this.directionsPanel2[0].nativeElement);

    directionsService.route({
          origin: new google.maps.LatLng(this.a,this.b),
           destination: new google.maps.LatLng(this.c,this.d),
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
  backdismiss(){
  	this.viewCtrl.dismiss()
  }

}
