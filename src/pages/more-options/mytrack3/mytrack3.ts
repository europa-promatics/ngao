import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController ,LoadingController,PopoverController,AlertController} from 'ionic-angular';
import {Geolocation, BackgroundGeolocation } from 'ionic-native';
import { LocationTracker } from '../../../providers/location-tracker'
import{Http}from'@angular/http'
import { Chart } from 'chart.js';
import {AddtofavPage}from'../../recordmyroute/addtofav/addtofav';
import{ListroutefavPage}from'../../listroutefav/listroutefav'
declare var google: any;
/*
  Generated class for the Mytrack3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mytrack3',
  templateUrl: 'mytrack3.html'
})
export class Mytrack3Page {
      @ViewChild('mymapop') mapElement: ElementRef;
        @ViewChild('lineCanvas') lineCanvas;
         lineChart: any;
lat;
lng;
mymapop : any ;
 mapEle;
   watchID;
   http
   speedlimit;
   count=0;
     SpeedPopup:boolean;
     speedtest;
     control;
     checkarray;
     distance;
     distancevscurrentspeed=[];
     distancevsspeedlimit=[];
     tapspeed:boolean;
       public speed : number=0;
  constructor(public alertCtrl:AlertController,public popoverCtrl: PopoverController,public loadingCtrl: LoadingController, http:Http,public navCtrl: NavController,public locationTracker: LocationTracker) {
this.http=http
this.tapspeed=false
}
 close()
  {
    this.SpeedPopup=false
  }
ionViewDidLoad()
{
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
toRad(x){
        return x * Math.PI / 180;
    }
starttracking(){
if(this.count%2==0){

  BackgroundGeolocation.start();
   var path = [];
  var a=[];
      this.watchID =navigator.geolocation.watchPosition((position)=> {
          // Save the current position
            this.speed = position.coords.speed;
         var x=document.getElementById('mymapop')
x.style.border="2px solid rgb(0, 169,255)"
          a.push({lat:position.coords.latitude,lng:position.coords.longitude})
          this.lat=position.coords.latitude
          this.lng=position.coords.longitude
          path.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          var myOptions = {
            zoom : 16,
            center : path[0],
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            disableDefaultUI:true
          }
          var map = new google.maps.Map(document.getElementById("mymapop"), myOptions);

 // for(var i = 0; i < 5; i++) {
 //            path.push(
 //              new google.maps.LatLng(
 //                position.coords.latitude + (Math.random() / 10 * ((i % 2) ? 1 : -1)),
 //                position.coords.longitude + (Math.random() / 10 * ((i % 2) ? 1 : -1))
 //              )
 //            );
 //          }
this.checkarray=a


 localStorage['path']=JSON.stringify(a)



          var latLngBounds = new google.maps.LatLngBounds();
          for(var i = 0; i < path.length; i++) {
            latLngBounds.extend(path[i]);
            new google.maps.Marker({
              map: map,
              position: path[i],
              title: "Point " + (i + 1)
            });
          }
          var polyline = new google.maps.Polyline({
            map: map,
            path: path,
            strokeColor: '#0000FF',
            strokeOpacity: 0.7,
            strokeWeight: 1
          });
          map.fitBounds(latLngBounds);
          this.speedcheck()
        });
 }

}
speedcheck()
{
  
var link='https://route.api.here.com/routing/7.2/getlinkinfo.json?app_id=9qJBl3A3dLUDhLLXbigx&app_code=EYz2_ciKNm_u18d1dWdlHg&mode=truck&waypoint=' +this.lat+ ',' + this.lng + '&linkattributes=all&language=fr-fr';
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
// this.locationTracker.startTracking();  
// this.speedtest=this.locationTracker.speed;

if(this.control=="off"){
  if (this.speedlimit!=0) {
 if(this.speedtest>this.speedlimit)
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
   
      this.distancevscurrentspeed.push({x:this.distance,y:this.speedtest})
       this.distancevsspeedlimit.push({x:this.distance,y:this.speedlimit})
               

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
 
        });


}
}
stopTracking() {
    this.count++
console.log(localStorage['path'])
// alert(localStorage['path'])
let prompt = this.alertCtrl.create({
      title: 'Recording Stopped!!',
      message: " You can press to star button to save your favourite route",
      buttons: [
       
        {
          text: 'OK',
          handler: data => {
              navigator.geolocation.clearWatch(this.watchID);
  BackgroundGeolocation.finish();
  
          }
        }
      ]
    });
    prompt.present();
 
  console.log('stopTracking');
}
submit(){
  this.navCtrl.push(ListroutefavPage)
}
presentPopover()
{
  // alert('data of lng,lat'+JSON.stringify(this.checkarray))
  // alert('distance vs currentspeed'+JSON.stringify(this.distancevscurrentspeed))
  // alert('distancevsspeedlimit'+JSON.stringify(this.distancevsspeedlimit))
  let popover = this.popoverCtrl.create(AddtofavPage,{lnglatdata:this.checkarray,distancevscurrentspeed:this.distancevscurrentspeed,distancevsspeedlimit:this.distancevsspeedlimit});
console.log('hi');
popover.present({});
}
}
