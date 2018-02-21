import { Component, OnInit} from '@angular/core';
import { NavController,AlertController ,LoadingController ,Platform, ViewController,ToastController,ActionSheetController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {SearchbarPage}from'../searchbar/searchbar';
import { Geolocation } from 'ionic-native';
import  { Http } from '@angular/http';
import{SettingPage }from'./setting/setting';
import { Diagnostic } from 'ionic-native';
import{WelcomePage}from'../welcome/welcome';


declare var google:any;
/*
  Generated class for the Page5 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page implements OnInit {
flashmap:boolean;
    address:any = {
        place: '',
        set: false,
    };
    popup_id
    placesService:any;
    mapo: any;
    markers = [];
    placedetails: any;
flashcardmap:boolean
locationSupported:boolean
public tap:number=0
  constructor(public alertCtrl:AlertController,public actionsheetCtrl:ActionSheetController,private toastCtrl:ToastController,private viewCtrl: ViewController,platform:Platform,public loadingCtrl: LoadingController,public navCtrl: NavController, http: Http,public modalCtrl: ModalController) {
 this.flashmap=false
this.popup_id=0
 platform.ready().then(() => {
     
      Diagnostic.isGpsLocationEnabled().then((res) => {
        console.log('diagnostic result', res);
        // alert(res);
          if(res=='true'||res==true)
          {
       console.log('hi')
          }
else{
  // window.alert('Switch On Your GPS')
let toast=this.toastCtrl.create({
  message:'Switch On Your Gps For Maps',
   duration: 3000,
    position: 'top'
})

toast.onDidDismiss(()=>{
console.log('over')
})
toast.present()

}
        this.locationSupported = res;
      }).catch((err) =>  {
        console.log('got an error using diagnostic');
        console.dir(err);
        console.log('hi')
        let toast=this.toastCtrl.create({
  message:'Switch On Your Gps For Maps',
   duration: 3000,
    position: 'top'
})

toast.onDidDismiss(()=>{
console.log('over')
})
toast.present()
      });

    });


  }
 // showBanner() {
 // alert('hi')
 //        let bannerConfig: AdMobFreeBannerConfig = {
 //            isTesting: true, // Remove in production
 //            autoShow: true,
 //          id:'ca-app-pub-4200157192834843/1104441810' 
 //        };
 
 //        this.admob.banner.config(bannerConfig);
 
 //        this.admob.banner.prepare().then(() => {
 //            // success
 //        }).catch(e => console.log(e));
 
 //    }

tapdetail()
{
if(this.popup_id==1)
{
	var street
	var address
	var country
	var route
	var locality
	var sublocality
	var postal_code
 console.log(JSON.stringify(this.placedetails))
 if(this.placedetails.components.street_number.short==''){
 	street='No Data Found'
 }
 else{
 	street=this.placedetails.components.street_number.short
 }

 if(this.placedetails.address===''){
 	address='No Data Found'
 }
 else{
 	address=this.placedetails.address
 }

 if(this.placedetails.components.country.short==''){
 	country='No Data Found'
 }
 else{
 	country=this.placedetails.components.country.short
 }
 if(this.placedetails.components.route.short==''){
 	route='No Data Found'
 }
 else{
 	route=this.placedetails.components.route.short
 }


 if(this.placedetails.components.locality.short==''){
 	locality='No Data Found'
 }
 else{
 	locality=this.placedetails.components.locality.short
 }

 if(this.placedetails.components.sublocality_level_1.short==''){
 	sublocality='No Data Found'
 }
 else{
 	sublocality=this.placedetails.components.sublocality_level_1.short
 }
  if(this.placedetails.components.postal_code.short ==''){
 	postal_code='No Data Found'
 }
 else{
 	postal_code=this.placedetails.components.postal_code.short 
 }









	   let actionSheet = this.actionsheetCtrl.create({
      title: 'Detail Address',
      buttons: [
        {
          text:'Full Address:-'+address,

          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text:'Country:-'+country,
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text:'Street Address:-'+route,
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text:'Street-Number:-'+street,
 
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text:'Locality:-'+locality,

          handler: () => {
            console.log('Cancel clicked');
          }
        },
             {
          text:'Sublocality:-'+sublocality ,
  
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text:'Postal code:-'+postal_code ,

          handler: () => {
            console.log('Cancel clicked');
          }
        }

      ]
    });
    actionSheet.present();
}

else{

	let alert=this.alertCtrl.create({
		title:'Search Location First!',
		subTitle:'Please Search Your Location and then find address detail.',
		buttons:['OK']
	})
	alert.present()
}
}
  
  logout()
  {
    this.navCtrl.setRoot(WelcomePage);
  }
  flashm()
  {
    
this.tap++
if(this.tap%2==0)
    {

    
this.flashcardmap=true
    }
    else{

this.flashcardmap=false

}

  }

    // ionViewWillEnter() {
    //     this.viewCtrl.showBackButton(false);
    // }

  ngOnInit() {
   // alert('loaded') 
        this.initMap();
        this.initPlacedetails();
         console.log('loading3');  
    }

   showModal() {
        // reset 
        this.popup_id=1
        this.reset();
        // show modal|
        let modal = this.modalCtrl.create(SearchbarPage);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                this.address.place = data.description;
                // get details
                this.getPlaceDetail(data.place_id);
            }                
        })
        modal.present();
    }

    private reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
         console.log('loading4');  
    }

    private getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
                 let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();

        this.placesService = new google.maps.places.PlacesService(this.mapo);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    loader.dismiss();
                    } 

                }                  
                // set place in map
                self.mapo.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
        

                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
 // let loader;

            }

        }

        console.log('loading1');
    }

    private initMap() {

    
        Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
         let mapEle = document.getElementById('mapo');
      this.mapo = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });


       google.maps.event.addListenerOnce(this.mapo, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
       let latlan = this;
       this.addMarker(position.coords.latitude,position.coords.longitude);

 
    }, (err) => {
      console.log(err);
    });
    }
    addMarker(a,b){
      // alert('sundar babaji');
       var icon = {
    url: "assets/img/Moving/MAPICON/007-inernet.png", // url
    scaledSize: new google.maps.Size(45, 65), // scaled size

  };
  let marker = new google.maps.Marker({
    map: this.mapo,
    animation: google.maps.Animation.DROP,
    // icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
    position: {lat:a, lng: b},
    icon:icon
  });
 
  let content = "<b>Current-Location!</b>";  

 console.log('hi');
  this.addInfoWindow(marker, content);
  

  }
  addInfoWindow(marker, content){
 
  // let infoWindow = new google.maps.InfoWindow({
  //   content: content
  // });
 
  google.maps.event.addListener(marker, 'click', () => {
   // alert('sdsds');
  this.flashcardmap=true
   // let popover = this.popoverCtrl.create(DashboardpopupPage);
   // popover.present({});
  });

 
}

    private createMapMarker(place:any):void {

       var icon = {
    url: "assets/img/Moving/MAPICON/008-gps.png", // url
    scaledSize: new google.maps.Size(45, 65) // scaled size

  };
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: this.mapo,
          position: placeLoc,
          icon:icon
        });    
        this.markers.push(marker);
    }

    private initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },                           // calle 
                street_number: { set: false, short:'', long:'' },                   // numero
                sublocality_level_1: { set: false, short:'', long:'' },             // barrio
                locality: { set: false, short:'', long:'' },                        // localidad, ciudad
                administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
                administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
                country: { set: false, short:'', long:'' },                         // pais
                postal_code: { set: false, short:'', long:'' },                     // codigo postal
                postal_code_suffix: { set: false, short:'', long:'' },
                              // codigo postal - sufijo
            }

  
        };
         console.log('loading2');  
     
    }    
   itemTapped(event, item) {
    this.navCtrl.push(Page5Page, {
      item: item
    });
  }
   refresh(){
  	this.initMap();
  	this.reset();
  }
setting()
{
    this.navCtrl.push(SettingPage);
}
}
