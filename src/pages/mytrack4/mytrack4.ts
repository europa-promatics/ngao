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
    @ViewChild('mapk') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    mapk: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
           alert('hi') 
        this.loadMap();
        this.startNavigating();
 
    }
 
    loadMap(){
 
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.mapk = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }
 
    startNavigating(){
 
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.mapk);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
 
        directionsService.route({
            origin: 'adelaide',
            destination: 'adelaide oval',
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        });
 
    }

}
