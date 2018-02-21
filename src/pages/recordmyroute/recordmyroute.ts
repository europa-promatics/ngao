import { Component, ViewChild} from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { LocationTracker } from '../../providers/location-tracker'
import { PopoverController} from 'ionic-angular';
import{AddtofavPage}from'./addtofav/addtofav';
import{FavlistPage}from'./favlist/favlist';
import{Http}from'@angular/http'
import { AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';


declare var google: any;

@Component({
  selector: 'page-recordmyroute',
  templateUrl: 'recordmyroute.html'
})
export class RecordmyroutePage {
   @ViewChild('lineCanvas') lineCanvas;
flag:boolean;
http;
data;
speedlimit;
reallat;
reallng;
currentspeed;
count=0;
count1=0;
count2=1;
 lineChart: any;
 testlat;
 testlng;
 testlat1;
 testlng1;
 speedtest;
 SpeedPopup:boolean;
 testlat100;
 testlng100;
 testflag='boom'
 lastlat
 lastlng
 distance
tapspeed:boolean
 control;
 speedlat
 speedlng
constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController,http:Http,public popoverCtrl: PopoverController,public navCtrl: NavController,public locationTracker: LocationTracker) {
      this.http=http;
    this.flag=false;
    this.data={};
      this.data.response='';
   this.tapspeed=false
  }
  close()
  {
    this.SpeedPopup=false
  }

hope(){
this.count1++
  this.activate()


Geolocation.getCurrentPosition().then((position) => {
let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
this.testlat1=position.coords.latitude;
this.testlng1=position.coords.longitude;
}, (err) => {
console.log(err);
});
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var mymaprecord = new google.maps.Map(document.getElementById('mymaprecord'), {
// zoom: 4,
// center: {lat: 30.5595, lng: 22.9375},
disableDefaultUI:true
});

directionsDisplay.setMap(mymaprecord);

directionsService.route({
origin: new google.maps.LatLng(this.testlat,this.testlng),
destination: new google.maps.LatLng(this.testlat1,this.testlng1),
travelMode: google.maps.DirectionsTravelMode.DRIVING
}, function(response, status) {
if (status === 'OK') {
directionsDisplay.setDirections(response);
var route = response.routes[0];
} 
else 
{
// window.alert('Please Try again ' + status);
}
});
if(this.flag==true)
{
setTimeout(() => {
this.hope()

this.count++;

}, 9000);
}
}
poslatlng(e)
{



  this.tapspeed=true
  this.count2++
  // alert('fs'+this.count2)
  // alert(e)
  if(this.count2%2==0){

let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();

 var link = 'http://18.221.76.63/ngao/webserviceget_status';
        var data = JSON.stringify({

           user_id:localStorage['pk'],
         
      
 });
         this.http.post(link, data)
         .subscribe(data => {
           loader.dismiss();
               console.log(JSON.parse(data._body).status.auth)
             this.control=JSON.parse(data._body).status.auth
           console.log('hy'+data);
        }, error => {
          loader.dismiss();
             console.log(error);
        });


    // alert('ds'+this.count2)
  this.currentspeed=e;

  // alert('currentspeed'+this.currentspeed);

this.flag=true;
Geolocation.getCurrentPosition().then((position) => {
let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
this.testlat=position.coords.latitude;
this.testlng=position.coords.longitude;
}, (err) => {
console.log(err);
});
this.hope();
}
}
presentPopover()
{
let popover = this.popoverCtrl.create(AddtofavPage,{testlatstore:this.lastlat,testlngstore:this.lastlng,testlatstore1:this.testlat,testlngstore1:this.testlng});
console.log('hi');
popover.present({});
}
stop(){
this.locationTracker.stopTracking();
this.lastlat= this.locationTracker.lat;
this.lastlng=this.locationTracker.lng;
this.flag=false;

let prompt = this.alertCtrl.create({
      title: 'Recording Stopped!!',
      message: " You can press to star button to save your favourite route",
      buttons: [
       
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
    
    // alert(this.count2);
}
submit()
{

    // this.SpeedPopup=true
this.navCtrl.push(FavlistPage);
}
toRad(x){
        return x * Math.PI / 180;
    }
activate()
{

let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        let R = earthRadius['miles'];
        let dLat = this.toRad((this.testlat1 - this.testlat));
        let dLon = this.toRad((this.testlng1 - this.testlng));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(this.testlat)) * Math.cos(this.toRad(this.testlat1)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
      this.distance=d

if(this.count1==1)
{

 let loader = this.loadingCtrl.create({
      content: "Get ready to drive",
      duration: 8000
    });
    loader.present();




}



this.locationTracker.startTracking();  
var lat1= this.locationTracker.lat;
var lng2=this.locationTracker.lng;



var link='https://route.api.here.com/routing/7.2/getlinkinfo.json?app_id=9qJBl3A3dLUDhLLXbigx&app_code=EYz2_ciKNm_u18d1dWdlHg&mode=truck&waypoint=' +lat1+ ',' + lng2 + '&linkattributes=all&language=fr-fr';

var data=JSON.stringify({
});
this.http.post(link,data).subscribe(data=>{
console.log(data._body);
console.log(JSON.parse(data._body).response.link[0].speedLimit);

this.speedlimit=JSON.parse(data._body).response.link[0].speedLimit;

},error=>{
console.log(JSON.stringify(error));
}
);


this.locationTracker.startTracking();  
this.speedtest=this.locationTracker.speed;
var datatest=[{x:1,y:2},{x:4,y:9}]
 this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
           
                datasets: [
                    {
                        label: "Distance VS Speed Limit",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(225, 0, 0, 0.69)",
                        borderColor: "rgba(225, 0, 0, 0.69)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(225, 0, 0, 0.69)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(225, 0, 0, 0.69)",
                        pointHoverBorderColor: "rgba(225, 0, 0, 0.69)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        // data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,

            // data: [{
            //     x: 0,
            //     y: 0
               
            // }, {
            //     x: this.distance,
            //     y: this.speedlimit
               

            // }]
            data:datatest
     

                    },

{
                        label: "Distance VS Current Speed",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0, 204, 219,0.69)",
                        borderColor: "rgba(0, 204, 219,0.69)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(0, 204, 219,0.69)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(0, 204, 219,0.69)",
                        pointHoverBorderColor: "rgba(0, 204, 219,0.69)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        // data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
            // data: [{
            //     x: 0,
            //     y: 0
                
            // }, {
            //     x: this.distance,
            //     y: this.speedtest
               

            // }]
            data:datatest

                    }





                ]
            },
              options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',

            }]
        }
    }
 
        });

if(this.control=="off"){

if (this.speedlimit!=0) {

  if(this.speedtest>this.speedlimit)
  {
  this.SpeedPopup=true
  }

}
}

else
{

}
 


}


}

