import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';
import{Mind786Page}from'../mind786/mind786'
declare var google
/*
  Generated class for the Analyzetrack page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-analyzetrack',
  templateUrl: 'analyzetrack.html'
})
export class AnalyzetrackPage {
	 @ViewChild('maptrack') mapElement: ElementRef;
	   @ViewChild('lineCanvas') lineCanvas;
         lineChart: any;
lnglatdata;
distancevsspeedlimit;
distancevscurrentspeed;
bmap
  constructor(public navCtrl: NavController,public navparams:NavParams) {

  	this.lnglatdata=this.navparams.get('a')
  	this.distancevsspeedlimit=this.navparams.get('c')
  	this.distancevscurrentspeed=this.navparams.get('b')

  }
  close(){
    this.navCtrl.setRoot(Mind786Page)
  }

  ionViewDidLoad() {
  	
       // alert(JSON.parse(this.distancevsspeedlimit))
       // alert(JSON.parse(this.distancevscurrentspeed))
   var map = new google.maps.Map(document.getElementById('maptrack'), {
          zoom:  19,
          center: {lat:JSON.parse(this.lnglatdata)[0].lat, lng:JSON.parse(this.lnglatdata)[0].lng},
           mapTypeId: 'terrain'
        });
        var flightPath = new google.maps.Polyline({
          path:JSON.parse(this.lnglatdata),
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
this.bmap=map


 this.addMarker(JSON.parse(this.lnglatdata)[0].lat,JSON.parse(this.lnglatdata)[0].lng);
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

          
            data:JSON.parse(this.distancevsspeedlimit)
     

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
            
            data:JSON.parse(this.distancevscurrentspeed)

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
  addMarker(a,b){
      // alert('sundar babaji');
  let marker = new google.maps.Marker({
    map: this.bmap,
    animation: google.maps.Animation.DROP,
     position: {lat:a, lng: b},
        icon: 'assets/img/001-planet.png',

  });
 // var icon1={
 //     url:  // url
 //   scaledSize: new google.maps.Size(33, 46)
 // }
  let content = "<b>Current-Location!</b>";  

 console.log('hi');

  

  }

}
