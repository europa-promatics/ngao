import { Component , ViewChild, ElementRef} from '@angular/core';
import { Injectable,NgZone } from '@angular/core';
import { NavController ,PopoverController,LoadingController,AlertController} from 'ionic-angular';
import {Geolocation, BackgroundGeolocation ,Geoposition} from 'ionic-native';
import{Http}from'@angular/http'
import { LocationTracker } from '../../providers/location-tracker'
import { Chart } from 'chart.js';
import{AddtofavPage}from'../recordmyroute/addtofav/addtofav'
import{ListroutefavPage}from'../listroutefav/listroutefav'
declare var google: any;
/*
  Generated class for the Speedtrack page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speedtrack',
  templateUrl: 'speedtrack.html'
})
export class SpeedtrackPage {
  @ViewChild('mapspeed') mapElement: ElementRef;
   @ViewChild('lineCanvas') lineCanvas;
         lineChart: any;
  mymapop : any ;
  watchID
    count=0;
    http;
    speedlimit;
    speedtest;
    lat;
    lng;
    SpeedPopup;
    control
    flag=0
    niollat
    niollng
     tsz
      checkarray
     public speed : number=0;
     distance
   distancevscurrentspeed=[];
     distancevsspeedlimit=[];
     tapspeed;
  constructor(public popoverCtrl: PopoverController,public alertCtrl:AlertController,public zone: NgZone,public loadingCtrl: LoadingController,public navCtrl: NavController, http:Http,public locationTracker: LocationTracker) {
  	this.http=http
  }
  toRad(x){
        return x * Math.PI / 180;
    }

ionViewDidLoad()
{
	// this.locationTracker.startTracking()
	// this.speedtest=this.locationTracker.speed;
		
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
             alert('error')
        });
       
      
}


submit(){
  this.navCtrl.push(ListroutefavPage)
}




 close()
  {
    this.SpeedPopup=false
  }
 starttracking() {

 	if(this.count%2==0){
     // alert('INSIDE')
     var path = [];
       var a=[];
      let options = {
    frequency: 9000, 
    enableHighAccuracy: true
  };

      // this.watchID = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
             this.watchID =navigator.geolocation.watchPosition((position)=> {
          // Save the current position

    this.speed = position.coords.speed;
    console.log('pikabu'+this.speed)
    // this.zone.run(() => {
   
    //   this.speed = position.coords.speed;
    //     this.tsz=position.timestamp;
   
    //        console.log(this.speed+','+this.tsz);
  
    // });

     //ionViewDidLoad(this.lat,this.lng);
         a.push({lat:position.coords.latitude,lng:position.coords.longitude})
          path.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                  this.lat=position.coords.latitude
          this.lng=position.coords.longitude
            
              // this.speed = position.coords.speed; 
          
          // Create the map
          var myOptions = {
            zoom : 16,
            center : path[0],
            mapTypeId : google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(document.getElementById("mapspeed"), myOptions);
            this.checkarray=a
          /*
          Uncomment this block if you want to set a path

          // Create the polyline's points
          for(var i = 0; i < 5; i++) {
            // Create a random point using the user current position and a random generated number.
            // The number will be once positive and once negative using based on the parity of i
            // and to reduce the range the number is divided by 10
            path.push(
              new google.maps.LatLng(
                position.coords.latitude + (Math.random() / 10 * ((i % 2) ? 1 : -1)),
                position.coords.longitude + (Math.random() / 10 * ((i % 2) ? 1 : -1))
              )
            );
          }
          */

          // Create the array that will be used to fit the view to the points range and
          // place the markers to the polyline's points
          var latLngBounds = new google.maps.LatLngBounds();
          for(var i = 0; i < path.length; i++) {
            latLngBounds.extend(path[i]);
            // Place the marker
            new google.maps.Marker({
              map: map,
              position: path[i],
              title: "Point " + (i + 1)
            });
          }
          // Creates the polyline object
          var polyline = new google.maps.Polyline({
            map: map,
            path: path,
            strokeColor: '#0000FF',
            strokeOpacity: 0.7,
            strokeWeight: 1
          });

          
          // Fit the bounds of the generated points
          map.fitBounds(latLngBounds)
           
var link='https://route.api.here.com/routing/7.2/getlinkinfo.json?app_id=9qJBl3A3dLUDhLLXbigx&app_code=EYz2_ciKNm_u18d1dWdlHg&mode=truck&waypoint=' + this.lat+ ',' +this.lng + '&linkattributes=all&language=fr-fr';
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
 if(this.control=="off"){
   if (this.speedlimit!=0) {
  if(this.speed>this.speedlimit)
   {
   this.SpeedPopup=true
   }
 }
 }
if(this.checkarray.length==1)
{

}
else if(this.checkarray.length>1)
{

this.tapspeed=true
for(var i=2;i<this.checkarray.length;i++)
{
 
let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        let R = earthRadius['miles'];
        let dLat = this.toRad((this.checkarray[i].lat-this.checkarray[i-1].lat));
        let dLon = this.toRad((this.checkarray[i].lng - this.checkarray[i-1].lng));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(this.checkarray[i-1].lat)) * Math.cos(this.toRad(this.checkarray[i].lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
      this.distance=d
   
      this.distancevscurrentspeed.push({x:this.distance,y:this.speed})
       this.distancevsspeedlimit.push({x:this.distance,y:this.speedlimit})
               // alert(JSON.stringify(this.distancevscurrentspeed)+','+JSON.stringify(this.distancevsspeedlimit))

}
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
                        spanGaps: false,

            data:this.distancevsspeedlimit
     

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
                        spanGaps: false,
            data:this.distancevscurrentspeed

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
 
        })
}
         


          // this.niol()
      });
    } 
    else 
    {
 this.count++

    }

  }
// niol()
// {
// 	this.locationTracker.startTracking();
//  this.niollat= this.locationTracker.lat;
// this.niollng=this.locationTracker.lng;



// var link='https://route.api.here.com/routing/7.2/getlinkinfo.json?app_id=9qJBl3A3dLUDhLLXbigx&app_code=EYz2_ciKNm_u18d1dWdlHg&mode=truck&waypoint=' + this.niollat+ ',' +this.niollng + '&linkattributes=all&language=fr-fr';
// var data=JSON.stringify({
// });
// this.http.post(link,data).subscribe(data=>{
// console.log(data._body);
// console.log(JSON.parse(data._body).response.link[0].speedLimit);

// this.speedlimit=JSON.parse(data._body).response.link[0].speedLimit;

// },error=>{
// console.log(JSON.stringify(error));
// }
// );
  
// this.speedtest=this.locationTracker.speed;
// if(this.control=="off"){
//   if (this.speedlimit!=0) {
//  if(this.speedtest>this.speedlimit)
//   {
//   this.SpeedPopup=true
//   }
// }
// }
// if(this.flag==0){
// 	alert('inside')
// setTimeout(() => {
// this.niol()
// }, 9000);
// }
// }
presentPopover()
{

  let popover = this.popoverCtrl.create(AddtofavPage,{lnglatdata:this.checkarray,distancevscurrentspeed:this.distancevscurrentspeed,distancevsspeedlimit:this.distancevsspeedlimit});
console.log('hi');
popover.present({});
}
stopTracking()
  {
    this.count=this.count+1
console.log(this.count)
  	this.flag=1
    let prompt = this.alertCtrl.create({
      title: 'Recording Stopped!!',
      message: " You can press to star button to save your favourite route",
      buttons: [
       
        {
          text: 'OK',
          handler: data => {
              navigator.geolocation.clearWatch(this.watchID);
    }
        }
      ]
    });
    prompt.present();

  }

}
