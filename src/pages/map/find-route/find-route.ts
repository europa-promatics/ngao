import{DirectroutePage}from'../../directroute/directroute'

import {Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import {NavController,AlertController ,LoadingController} from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import {SearchbarPage} from '../../searchbar/searchbar';
import {Geolocation} from 'ionic-native';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../providers/webservice-url';
import {ListroutePage }from'./listroute/listroute';
import { PopoverController} from 'ionic-angular';
import { RoutenamePage } from './routename/routename';
declare var google: any;


@Component({
  selector: 'page-find-route',
  templateUrl: 'find-route.html'
})

    export class FindRoutePage{

   
 address: any = {
        place: '',
        set: false,
        plac: '',
        pla: '',

    };
    placesService: any;
    mape: any;
    markers = [];

    placedetails: any;
    pk;
start;
end;
val1;
val2;
val3;
val4;
v1;
v2;
v3;
v4;
user_id;
http;
   data;
Popup4;
Popup:boolean
latroute;
lngroute;
latroute1;
lngroute1;
count=0
destinationlat
destinationlng
sourceaddress
    constructor(public popoverCtrl: PopoverController,public navCtrl: NavController, public modalCtrl: ModalController,http: Http,public web:WebserviceUrl,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
        this.Popup=true
       this.data={};
        this.data.response='';
     this.http = http;
    }
   // ionViewDidEnter()
   ngOnInit()
   {

        this.initPlacedetails();
        this.initMap();

    }
    popsy()
    {
        this.Popup4=true
    }



getloc()
{
alert(localStorage['value3'])
}

locateget()
{

   var latlng={lat:31.63661,lng:74.87476}
    var geocoder=new google.maps.Geocoder();
     geocoder.geocode({'location': latlng}, function(results, status) {
         alert(results[1].formatted_address)
            });

}





    access() {
   var g1
   var g2
        this.Popup=true;

        var geocoder = new google.maps.Geocoder();
        var addres = this.address.plac;
        localStorage['sourceaddress'] =addres;

        geocoder.geocode({
            'address': addres
        }, function (results, status) {
            let latitud = results[0].geometry.location.lat();
            let longitud = results[0].geometry.location.lng();
       
            localStorage['value1'] =latitud;
             localStorage['value2'] =longitud;
             console.log(localStorage['value1']);
     
             console.log(localStorage['value2']);

             let souce= latitud + ',' + longitud; 

            
            localStorage['source'] =souce;
            console.log(localStorage['source']);


        });



           
        var address = this.address.pla;
        localStorage['destinationaddress'] =address;

        geocoder.geocode({
            'address': address
        }, (results, status)=> {
        	
  
                   this.destinationlat=results[0].geometry.location.lat()
                   this.destinationlng=results[0].geometry.location.lng()
                     this.draw();
            
        });
               }


       



 draw()
 {
     console.log('Enter')
      var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('mape'), {
          zoom: 4,
          center: {lat:this.destinationlat, lng:this.destinationlng}
        });

          console.log('checklat'+this.destinationlat+'checklng'+this.destinationlng)
        directionsDisplay.setMap(map);
    
          directionsService.route({
          origin: new google.maps.LatLng(this.latroute,this.lngroute),
         
           destination: new google.maps.LatLng(this.destinationlat,this.destinationlng),
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, (response, status)=> {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
          } 
          else 
          {
  
            this.count++
            if(this.count>2)
           {
 let alert1=this.alertCtrl.create({
                subTitle:'Please Enter the destination within your country or Try Again!',
                buttons:['OK']
            })
            alert1.present()
           }
           else{
           this.access();
           console.log('check'+this.count)
          }
          }
        });
 }


     refresh(){

      this.initMap();
      this.reset();
  }

    showModal() {
  
        let modal = this.modalCtrl.create(SearchbarPage);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if (data) {
                this.address.plac = data.description;
      
                this.getPlaceDetail(data.place_id);
            }
        })
        console.log('load1load2');
        modal.present();
    }

    showModa() {
       
        let modal = this.modalCtrl.create(SearchbarPage);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if (data) {
                this.address.pla = data.description;
  
                this.getPlaceDetail(data.place_id);
            }
        })
        console.log('load23');
        modal.present();
    }



    private reset() {
        this.initPlacedetails();
        this.address.pla = '';
        this.address.plac = '';
        this.address.set = false;
        console.log('load2');
    }

    private getPlaceDetail(place_id: string): void {

        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.mape);
        this.placesService.getDetails(request, callback);

        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
            
                       console.log('get lat n lang'+place.geometry.location.lat())

                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if (self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }
                }
                // set place in map
                self.mape.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            } else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }

    }


        private initMap() {
  

        Geolocation.getCurrentPosition().then((position) => {
            console.log(position)
            let mapEle = document.getElementById('mape');
            this.mape = new google.maps.Map(mapEle, {

                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });


            google.maps.event.addListenerOnce(this.mape, 'idle', () => {
                mapEle.classList.add('show-map');
                google.maps.event.trigger(mapEle, 'resize');
            });
            let latlan = this;
            this.addMarker(position.coords.latitude, position.coords.longitude);
              this.getlocation(position.coords.latitude, position.coords.longitude);
            //     this.map.addListener('click', function(event){
            //       console.log(event);
            //      latlan.abc=event.latLng;
            //      latlan.addMarker();

            // });

        }, (err) => {
            console.log(err);
        });
        console.log('load4');

    }

getlocation(a,b)
{
	// alert('hi');
this.latroute=a;
this.lngroute=b;
}




    addMarker(a, b) {
        // alert('sundar babaji');
        let marker = new google.maps.Marker({
            map: this.mape,
            animation: google.maps.Animation.DROP,
            // icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            position: {
                lat: a,
                lng: b
            }
        });

        let content = "<b>Current-Location!</b>";

        console.log('load4');


    }


    private createMapMarker(place: any): void {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.mape,
            position: placeLoc
        });
        this.markers.push(marker);
    }

        private initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: {
                    set: false,
                    short: '',
                    long: ''
                }, // calle 
                street_number: {
                    set: false,
                    short: '',
                    long: ''
                }, // numero
                sublocality_level_1: {
                    set: false,
                    short: '',
                    long: ''
                }, // barrio
                locality: {
                    set: false,
                    short: '',
                    long: ''
                }, // localidad, ciudad
                administrative_area_level_2: {
                    set: false,
                    short: '',
                    long: ''
                }, // zona/comuna/partido 
                administrative_area_level_1: {
                    set: false,
                    short: '',
                    long: ''
                }, // estado/provincia 
                country: {
                    set: false,
                    short: '',
                    long: ''
                }, // pais
                postal_code: {
                    set: false,
                    short: '',
                    long: ''
                }, // codigo postal
                postal_code_suffix: {
                    set: false,
                    short: '',
                    long: ''
                }, // codigo postal - sufijo
            }
        };
        console.log('load5');
    }
    itemTapped(event, item) {
        this.navCtrl.push(FindRoutePage, {
            item: item
        });
    }

presentPopover()
{
      var latlng={lat:this.latroute,lng:this.lngroute}
    var geocoder=new google.maps.Geocoder();
     geocoder.geocode({'location': latlng}, (results, status)=> {
      this.sourceaddress=results[1].formatted_address
  this.routepagetrigger()
            });
  
	
}
routepagetrigger()
{
     let popover = this.popoverCtrl.create( RoutenamePage,{a:this.latroute,b:this.lngroute,c:this.destinationlat,d:this.destinationlng,sourceaddress:this.sourceaddress});
    console.log('hi');
    popover.present({});
}







    submit()
    {
        this.navCtrl.push(ListroutePage);
    }
direction()
{
    console.log('get me the direction'+this.latroute+this.lngroute)
this.navCtrl.push(DirectroutePage,{a:this.latroute,b:this.lngroute,c:this.destinationlat,d:this.destinationlng})
}

}
