import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google
/*
  Generated class for the Mytrack4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mytrack4',
  templateUrl: 'mytrack4.html'
})
export class Mytrack4Page {
     @ViewChild('mapf') mapElement: ElementRef;
  constructor(public navCtrl: NavController) {


 localStorage['path']
 

  }

 ratengao()
 {
  
 }
   ionViewDidLoad()
   {

   	alert(JSON.parse(localStorage['path'])[0].lng)
       alert(JSON.parse(localStorage['path']))
   	// function initMap() {
        var map = new google.maps.Map(document.getElementById('mapf'), {
          zoom: 16,
          center: {lat:JSON.parse(localStorage['path'])[0].lat, lng:JSON.parse(localStorage['path'])[0].lng},
          mapTypeId: 'terrain'
        });

        // var flightPlanCoordinates = [
        //   {lat: 37.772, lng:-122.214},
        //   {lat: 37.772, lng:-122.214},
        //   {lat: 37.772, lng:-122.214},
        //   {lat: 37.772, lng:-122.214}
        // ];
        var flightPath = new google.maps.Polyline({
          path:JSON.parse(localStorage['path']),
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
      }

   // }

}
