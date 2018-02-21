

import { Component ,ViewChild,ElementRef} from '@angular/core';
import { NavController,LoadingController,PopoverController,AlertController } from 'ionic-angular';
import{Geolocation}from'ionic-native'
import{LocationTracker}from'../../providers/location-tracker';
import{Http}from'@angular/http'
import { Chart } from 'chart.js';
import{AddtofavPage}from'../recordmyroute/addtofav/addtofav'
import{ListroutefavPage}from'../listroutefav/listroutefav'
import{SettingPage}from'../DASHBOARD/setting/setting'
declare var google

@Component({
  selector: 'page-mind786',
  templateUrl: 'mind786.html'
})
export class Mind786Page {
@ViewChild('mindmap') mapElement:ElementRef
 @ViewChild('lineCanvas') lineCanvas;
         lineChart: any;
lat
lng
flag
mindline=[]
distanceline=[]
cmap
lat1;
lng1;
speed=0;
http;
speedlimit;
    count=0;
    distance=0;
       distancevscurrentspeed=[];
     distancevsspeedlimit=[];
     tapspeed:boolean
     control;
     SpeedPopup:boolean
    countspeed=0;
   dist2=[];
   totaldistance=0;
   lastpin;
    totallastpin;
     lastlnglat;
   a=1.079999
   dividepath;
roundedspeed;
roundedspeedlimit;
roundeddistance;
refreshme:boolean
datapin=[]
 markers: any = [];
 droppin=[];

 lat100=[]
lat200=[]
x:number=0;
y:number=0;
value;

latLng;
marker12;
doubleroundedspeedlimit
 lem
  phspeed;
   phspeed2;
   ngaolat1;
   ngaolng1;
   roundedspeedlimit2
  constructor(public alertCtrl: AlertController,public popoverCtrl: PopoverController,public navCtrl: NavController,public locationTracker: LocationTracker,http:Http,public loadingCtrl: LoadingController) {
  	this.http=http;
  	this.flag=1
    this.refreshme=false
  
  }

 close()
  {
    this.SpeedPopup=false
  }


nextpin()
{
 this.navCtrl.setRoot(Mind786Page)
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
         Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.ngaolat1=position.coords.latitude
          this.ngaolng1=position.coords.longitude

    }, (err) => {
      console.log(err);
    });
      var point = {lat:this.ngaolat1, lng:this.ngaolng1}; 
        var map=new google.maps.Map(document.getElementById('mindmap'),{
      zoom:18,
      center:point,
    
        mapTypeId: google.maps.MapTypeId.ROADMAP,
       disableDefaultUI:true
    })
       this.cmap=map
      
}


  toRad(x){
        return x * Math.PI / 180;
    }
   


addMarker(a,b){
    
  var icon = {
    url: "assets/img/Moving/MAPICON/007-inernet.png", // url
    scaledSize: new google.maps.Size(45, 65), // scaled size

  };
  let marker = new google.maps.Marker({
    map: this.cmap,
   
     position: {lat:a, lng: b},
        icon:icon

  });
  let content = "<b>Current-Location!</b>";  

 console.log('hi');

  }
Starttracking() {
 	if(this.count%2==0){
    this.refreshme=true
 		   console.log('step1'+this.count)
 	
this.locationTracker.startTracking();
// alert('check speed'+this.locationTracker.speed)
if(this.locationTracker.speed==NaN||!this.locationTracker.speed)
{

this.roundedspeed=0

}
else 
{
	
this.speed=this.locationTracker.speed;
// alert(this.speed)

this.phspeed=this.speed*2.24
 this.roundedspeed=Math.round(this.phspeed*100)/100;
 // alert('speed'+this.speed+'mile/hour'+this.phspeed+'roundspeed'+this.roundedspeed)
}
var link='https://route.api.here.com/routing/7.2/getlinkinfo.json?app_id=TzikL7Wbv70GRzBMuo7O&app_code=7u4n7pNg6G1db6Z6TD2h0w&mode=truck&waypoint=' + this.lat+ ',' +this.lng + '&linkattributes=all&language=fr-fr';
var data=JSON.stringify({
});
this.http.post(link,data).subscribe(data=>{
console.log(data._body);
console.log('CHECKSPEEDLIMIT'+JSON.parse(data._body).response.link[0].speedLimit);

this.speedlimit=JSON.parse(data._body).response.link[0].speedLimit;
this.phspeed2=this.speedlimit*2.24
// this.roundedspeedlimit=Math.round(this.phspeed2*100)/100
this.roundedspeedlimit=~~this.phspeed2
this.doubleroundedspeedlimit=this.roundedspeedlimit%10

 if (this.doubleroundedspeedlimit==0)
 {
   this.roundedspeedlimit2=this.roundedspeedlimit
 }
else if(this.doubleroundedspeedlimit==1)
{
  this.roundedspeedlimit2=this.roundedspeedlimit-1
}
else if(this.doubleroundedspeedlimit==2)
{
 this.roundedspeedlimit2=this.roundedspeedlimit-2 
}
else if(this.doubleroundedspeedlimit==3)
{
 this.roundedspeedlimit2=parseInt(this.roundedspeedlimit)+2 
}
else if(this.doubleroundedspeedlimit==4)
{
 this.roundedspeedlimit2=parseInt(this.roundedspeedlimit)+1

}
else if(this.doubleroundedspeedlimit==5)
{
  this.roundedspeedlimit2=this.roundedspeedlimit
}
else if(this.doubleroundedspeedlimit==6)
{
 this.roundedspeedlimit2=this.roundedspeedlimit-1 
}
else if(this.doubleroundedspeedlimit==7)
{
 this.roundedspeedlimit2=this.roundedspeedlimit-2 
}
else if(this.doubleroundedspeedlimit==8)
{
 this.roundedspeedlimit2=parseInt(this.roundedspeedlimit)+2 
}
else if(this.doubleroundedspeedlimit==9)
{
 this.roundedspeedlimit2=parseInt(this.roundedspeedlimit)+1 
}
},error=>{
console.log(JSON.stringify(error));
}
);

Geolocation.getCurrentPosition().then((position)=>{
let latlng=new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
this.lat=position.coords.latitude
this.lng=position.coords.longitude



   this.mindline.push({lat:position.coords.latitude,lng:position.coords.longitude})
      // var mindline=[
      //  {lat:37.722,lng:-122.214},
      //   {lat:37.722,lng:-122.214},
      //   {lat:37.722,lng:-122.214}

      // ]
      // alert(JSON.stringify(this.mindline))
      console.log(this.mindline[0].lat)
   
    //    var map=new google.maps.Map(document.getElementById('mindmap'),{
    // 	zoom:18,
    // 	center:this.mindline[0],
    
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //    disableDefaultUI:true
    // })
    //    this.cmap=map
   this.addMarker(this.mindline[0].lat,this.mindline[0].lng)





	var latlngBounds=new google.maps.LatLngBounds();

       
      for(var i=0;i<this.mindline.length;i++)
      {
       latlngBounds.extend(this.mindline[i])

 // new google.maps.Marker({
       // 	map:map,
       // 	position:this.mindline[i],
       // 	title:"Point"+(i+1)
       // 	 icon: 'assets/img/001-circle-1.png'

       // })
      }
         
  this.cmap.fitBounds(latlngBounds)
      var mindmap=new google.maps.Polyline({
        path:this.mindline,
        geodisc:true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
         });
      
          mindmap.setMap(this.cmap);   
     // }

 if(this.mindline.length==1)
{

}
else if(this.mindline.length>=2)
{

this.tapspeed=true
// this.distancevscurrentspeed.push({x:this.distance,y:this.speed})
// this.distancevsspeedlimit.push({x:this.distance,y:this.speedlimit})
// for(var i=1;i<this.mindline.length;i++)
// {
//   alert(JSON.stringify(this.mindline))
// alert(this.mindline.length)
// alert(this.mindline.length-1)
this.lastpin=this.mindline.length-1

// alert(this.mindline[this.lastpin].lat)
// alert(JSON.stringify(this.mindline[0]))
let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        let R = earthRadius['miles'];
        let dLat = this.toRad((this.mindline[this.lastpin].lat-this.mindline[this.lastpin-1].lat));
        let dLon = this.toRad((this.mindline[this.lastpin].lng - this.mindline[this.lastpin-1].lng));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(this.mindline[this.lastpin-1].lat)) * Math.cos(this.toRad(this.mindline[this.lastpin].lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
      this.distance=d
      this.roundeddistance=Math.round(this.distance*100)/100;
  //     if(this.distance>=2)
  // {
  //  this.addMarker2(this.mindline[this.lastpin].lat,this.mindline[this.lastpin].lng)    
  // }
  // else{

  // }
      // alert('dist'+this.distance[i])
      //   alert('dist'+this.distance[i-1])

   
  
     } 
  

               // alert(JSON.stringify(this.distancevscurrentspeed)+','+JSON.stringify(this.distancevsspeedlimit))

// }

 // this.dist2.push({z:this.distance})
       // alert(this.dist2.length-1)
       // this.totallastpin=this.dist2.length-1
           // this.distancevscurrentspeed.length-1
    //     for(var j=1;j<this.dist2.length;j++)
    // {
      // alert('check dista'+this.dist2[j].z)
      // alert('check distan'+this.dist2[j-1].z)
      // alert(this.dist2[j].z+this.dist2[j-1].z)

     


// alert('total distance'+this.totaldistance)
// alert(this.speedlimit)
if(this.phspeed2!=undefined){
  // alert('gab')
 if(this.totaldistance==undefined)
     {
         // alert('enter undefined')
     }
     else{
       // alert('distancehope'+this.distance+'distancehope'+this.totaldistance)
      // alert('add'+this.totaldistance)
      this.totaldistance=this.distance+this.totaldistance

this.dividepath=~~this.totaldistance

// alert('total_distancecomplete'+this.dividepath+'total_distance'+this.totaldistance)
// if(this.dividepath!=0){
//if(this.dividepath%2==0)
// {




  this.droppin.push({dist:this.dividepath})

  // alert(JSON.stringify(this.droppin))
  if(this.droppin.length>=2){
    this.lem=this.droppin.length-1
    // alert('pehla'+','+this.droppin[this.lem-1].dist)
    // alert('dusra'+','+this.droppin[this.lem].dist)
    // alert('data'+JSON.stringify(this.droppin))

  //if(this.droppin[lem-1].dist!=this.droppin[lem].dist)
  //{

if(this.dividepath%2==0)
{
// alert('second reach even')
if(this.droppin[this.lem-1].dist!=this.droppin[this.lem].dist){
 // alert('786')
 this.distanceline.push({lat:position.coords.latitude,lng:position.coords.longitude})
}
}
// alert('distanceline'+JSON.stringify(this.distanceline))
    for(this.value of this.distanceline)
    {
     
        this.lat100[this.x]=this.value.lat
        this.lat200[this.y]=this.value.lng
       this.latLng = new google.maps.LatLng(this.lat100[this.x],this.lat200[this.y]);

  var icon1 = {
    url: "assets/img/Moving/MAPICON/008-gps.png", // url
    scaledSize: new google.maps.Size(45, 65), // scaled size

  };

           this.marker12 = new google.maps.Marker({
              map: this.cmap,
              position:this.latLng,
              icon:icon1

              });
         
            this.markers.push(this.marker12);

            this.x++;
            this.y++;
        }
  //}
//   else{
// alert('ni pahuncha')
//   }
}

 


// this.addMarker2(position.coords.latitude,position.coords.longitude)

// }
// else{

// alert('not 2 miles')
// }
// }
// else{

// }
       // alert('bi')
          // alert('totaldistance'+this.totaldistance)
           this.distancevscurrentspeed.push({x:this.totaldistance,y:this.phspeed})
       this.distancevsspeedlimit.push({x:this.totaldistance,y:this.phspeed2})
     }
     // if(this.speedlimit==){
}
else{
   // alert('bag')

}





this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
           
                datasets: [
                    {
                      
                        label: "Speed Limit Vs Distance",
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
                        label: "Current Speed Vs Distance",
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
// }
// else{
//   alert('checkelse')
// }
// seeee// }



 // if(this.control=="off"){
 //   if (this.phspeed2!=0) {
 //  if(this.phspeed>this.phspeed2)
 //   {
 //   this.SpeedPopup=true
 //    }
 //     }
 //  }
 // alert('step1'+this.phspeed+'check1'+this.control+'check2'+this.locationTracker.speed)
 if(this.control=="off"){
   // if (this.phspeed2!=0) {
     // alert('step2'+this.control)
      if (this.phspeed2!=0) {
  if(this.phspeed>this.phspeed2)
   {
   this.SpeedPopup=true
    // alert('step3'+this.control)
    }
    }
     // }
  }

      if(this.flag==1){
 
      setTimeout(()=>{
	this.Starttracking()
       },5000)
    }


    });
  }
 else 
    {
    	  console.log('step2'+this.count)
 this.count++

    }
  }
 
  stoptracking()
{
	  // alert('This is distance vs currentspeed'+JSON.stringify(this.distancevscurrentspeed))
	  //  alert('This is distance vs speedlimit'+JSON.stringify(this.distancevsspeedlimit))
this.lastlnglat=this.mindline.length-1
this.count=this.count+1
console.log('step3'+this.count)
this.flag=0
this.locationTracker.stopTracking();
this.addMarker1(this.mindline[this.lastlnglat].lat,this.mindline[this.lastlnglat].lng)
}

addMarker1(a,b)
{


var icon2 = {
    url: "assets/img/Moving/MAPICON/006-squres.png", // url
    scaledSize: new google.maps.Size(45,65), // scaled size

  };






let marker = new google.maps.Marker({
    map: this.cmap,
    animation: google.maps.Animation.DROP,
     position: {lat:a, lng: b},
        icon:icon2

  });
  let content = "<b>Current-Location!</b>";  

 console.log('hi');

}
setting()
{
    this.navCtrl.push(SettingPage);
}


presentPopover()
{
// alert('STEP4'+this.mindline+''+this.distancevscurrentspeed+''+this.distancevsspeedlimit)
//   let popover = this.popoverCtrl.create(AddtofavPage,{lnglatdata:this.mindline,distancevscurrentspeed:this.distancevscurrentspeed,distancevsspeedlimit:this.distancevsspeedlimit});
// console.log('hi');
// popover.present({});

this.navCtrl.push(AddtofavPage,{lnglatdata:this.mindline,distancevscurrentspeed:this.distancevscurrentspeed,distancevsspeedlimit:this.distancevsspeedlimit});

}   
submit()
{
this.navCtrl.push(ListroutefavPage);
}
}
