import { Component } from '@angular/core';
import { NavController ,LoadingController,NavParams ,AlertController } from 'ionic-angular';
import{Http}from'@angular/http';
import { WebserviceUrl } from '../../providers/webservice-url';
import{ReportIncidentPage}from'../map/report-incident/report-incident';
import{NextincidentpinsPage}from'../nextincidentpins/nextincidentpins';


/*
  Generated class for the Infoincident page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-infoincident',
  templateUrl: 'infoincident.html'
})
export class InfoincidentPage {
http;
inci;
Popup:boolean;
Popup1:boolean;
time;
total;
item_quantity=0;
AutoRefresh:boolean;
foo;
popstatus;
latitude;
longitude;
fabhope;
divhope;
divhope1;
divhope2;
divhope3;
divhope4;
notification:boolean;
day;
week;
month;
year;
timelimit;
notify;
public tap:number=0
public tap1:number=0
  constructor(public navParams: NavParams,public navCtrl: NavController,http:Http,public loadingCtrl:LoadingController,public web:WebserviceUrl,public alertCtrl: AlertController) {
  	this.divhope1=false;
    this.divhope2=false;
    this.divhope3=false;
    this.divhope4=false;
this.fabhope=false
// this.notification=false;
    this.Popup1=false;
  	this.http=http
  	this.Popup=false;
     this.latitude=this.navParams.get('latitude');
     this.longitude=this.navParams.get('longitude');
     this.divhope=true;
  	// this.AutoRefresh=false;
  }
toggleNotification()
  {
    // alert(this.notification);
//     this.tap1++;
//    alert(this.tap1)
//     // this.AutoRefresh=true;

// if(this.tap1%2==0)
//    

//   this.notification=true

//    alert(this.notification)
//     }
//     else if(this.tap1%2!=0){
    
//   this.notification=false


//   alert(this.notification);
// }
// 	// alert(this.foo);
if(this.notification==true)
{
this.notify="active"
}
else if(this.notification==false){
  this.notify="inactive"

}


  }

Saved1()
{
  this.timelimit="1440"
let loader=this.loadingCtrl.create({
  content:"Please Wait",
});
loader.present();
var link=this.web.webservice+'webservicepinDeleteReport';
var data=JSON.stringify({
report:this.day,
time:this.timelimit,
   user_id:localStorage['pk'],
   status:this.notify



})
this.http.post(link,data).subscribe(data=>
{
  loader.dismiss();
  console.log(data._body);
  console.log(data);
  this.navCtrl.setRoot(ReportIncidentPage)

})
}

Saved2()
{
   this.timelimit="43200"

let loader=this.loadingCtrl.create({
  content:"Please Wait",
});
loader.present();
var link=this.web.webservice+'webservicepinDeleteReport';
var data=JSON.stringify({
report:this.month,
time:this.timelimit,
   user_id:localStorage['pk'],
   status:this.notify



})
this.http.post(link,data).subscribe(data=>
{
  loader.dismiss();
  console.log(data._body);
  console.log(data);
  this.navCtrl.setRoot(ReportIncidentPage)

})



}
Saved3()
{
   this.timelimit="10080"
let loader=this.loadingCtrl.create({
  content:"Please Wait",
});
loader.present();
var link=this.web.webservice+'webservicepinDeleteReport';
var data=JSON.stringify({
report:this.week,
time:this.timelimit,
   user_id:localStorage['pk'],
   status:this.notify



})
this.http.post(link,data).subscribe(data=>
{
  loader.dismiss();
  console.log(data._body);
  console.log(data);
  this.navCtrl.setRoot(ReportIncidentPage)

})





}
Saved4()
{
 
this.timelimit="525600"

let loader=this.loadingCtrl.create({
  content:"Please Wait",
});
loader.present();
var link=this.web.webservice+'webservicepinDeleteReport';
var data=JSON.stringify({
report:this.year,
time:this.timelimit,
   user_id:localStorage['pk'],
   status:this.notify



})
this.http.post(link,data).subscribe(data=>
{
  loader.dismiss();
  console.log(data._body);
  console.log(data);
  this.navCtrl.setRoot(ReportIncidentPage)

})




}









  hope2()
  {
this.divhope=false;
this.divhope1=true;
this.divhope2=false;
this.divhope3=false;
this.divhope4=false;
 this.fabhope=false;




  }

hope3()
{
  this.divhope=false;
this.divhope2=true;
this.divhope1=false;
this.divhope3=false;
this.divhope4=false;
 this.fabhope=false;
}

hope4()
{
  this.divhope=false;
this.divhope3=true;
this.divhope1=false;
this.divhope2=false;
this.divhope4=false;
 this.fabhope=false;
}
hope5()
{
  this.divhope=false;
this.divhope4=true;
this.divhope1=false;
this.divhope2=false;
this.divhope3=false;
 this.fabhope=false;



}

hope1()
{
 

 this.tap++

    if(this.tap%2==0)
    {

     this.divhope=true;

     this.fabhope=false;
       this.divhope1=false;
       this.divhope2=false;
       this.divhope3=false;
       this.divhope4=false;


    }
    else{
    
    let loader=this.loadingCtrl.create({
  content:"Please Wait",
});
    loader.present();
 var link = this.web.webservice+'webservicepin_filter';
        var data = JSON.stringify({
         latitude:this.latitude,
         longitude:this.longitude

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
    
           this.fabhope=true;
           console.log('hy'+data);
            console.log(data._body);

         console.log(JSON.parse(data._body).day)
             console.log(JSON.parse(data._body).week)
                 console.log(JSON.parse(data._body).month)
                     console.log(JSON.parse(data._body).year)
     
this.day=JSON.parse(data._body).day
this.week=JSON.parse(data._body).week
this.month=JSON.parse(data._body).month
this.year=JSON.parse(data._body).year





          
         }, error => {
             console.log(error);
               loader.dismiss();
               });


    }



}
  modes2(e)
  {
  	if(e==1)
{

var x=document.getElementById('c1')
x.style.border="4px solid rgb(0, 169,255)"
this.popstatus='true'

} else if(e==2)
{
var x=document.getElementById('c2')
x.style.border="4px solid rgb(0, 169,255)"

this.popstatus='false'
}
  }

  modes(e)
  {

  	if(e==1)
{

var x=document.getElementById('b1')
x.style.border="4px solid rgb(0, 169,255)"
this.time='day'

// alert(this.mode)
} else if(e==2)
{
var x=document.getElementById('a2')
x.style.border="4px solid rgb(0, 169,255)"

this.time='month'
}
else if(e==3)
{
var x=document.getElementById('a3')
x.style.border="4px solid rgb(0, 169,255)"
this.time='week'
}





  }
  add(){
    this.item_quantity++
  }
  remove(){
    if(this.item_quantity==1){
    }else{
    this.item_quantity--
    }
  }

  ionViewDidLoad() {
let loader=this.loadingCtrl.create({
	content:"Please Wait",
});
loader.present();
var link=this.web.webservice+'webservicedistance_incident';
var data=JSON.stringify({
 longitude:this.longitude,
 latitude:this.latitude
})
this.http.post(link,data).subscribe(data=>
{
	loader.dismiss();
	console.log(data._body);
	console.log(data);
	console.log(JSON.parse(data._body).report_incident)
	this.inci=JSON.parse(data._body).report_incident;

	// console.log(JSON.parse(data._body).report_incidents[0])
})




    
  }
  incidenttap(inciid)
  {
// alert(inciid)
this.navCtrl.push(NextincidentpinsPage,{inciid:inciid})
  }
hope()
{
  // alert(this.inci)
//   let arr=[];
//   let ar=[];
//   let tit=[];
//   let type=[];
//   let i:number=0;
//   let j:number=0;
//   let k:number=0;
//   let l:number=0;
//   // console.log(this.beaches.length)
//     console.log(this.inci.length)

//      for (let data of this.inci){

//       arr[i]=data.latitude;
//        ar[j]=data.longitude;
   
    
//      console.log(arr[i]);
//      console.log(ar[j]);

// let earthRadius = {
//             miles: 3958.8,
//             km: 6371
//         };
//         let R = earthRadius['miles'];
//         let lat1 = 30.9521287;
//         let lon1 = 75.847574;
//         let lat2 = arr[i];
//         let lon2 = ar[j];
//         let dLat = this.toRad((lat2 - lat1));
//         let dLon = this.toRad((lon2 - lon1));
//         let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//         let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         let d = R * c;

// console.log(d)









//      // i++;
//      //  j++;
//      //  k++;
// }



}
  // toRad(x){
  //       return x * Math.PI / 180;
  //   }
  close()
  {
  	this.Popup=false;
  	if(this.time=='day')
	{
    this.total=this.item_quantity*1440
    // alert('day minutes'+this.total)  

	}
	else if(this.time=='week')
	{
this.total=this.item_quantity*10080
// alert('week minutes'+this.total)

	}
  }
  close1()
  {
  	this.Popup1=false;
  }
select(id)
{
	this.Popup=true;
// alert(id);
localStorage['id']=id
}
select1(id)
{
	this.Popup1=true;
// alert(id);
localStorage['id']=id
}
Save()
{
// alert(this.popstatus);
// 	alert(this.item_quantity);
// 	alert(this.time);
	if(this.time=='day')
	{
    this.total=this.item_quantity*1440
    // alert('day minutes'+this.total)  
	}
	else if(this.time=='week')
	{
this.total=this.item_quantity*10080
// alert('week minutes'+this.total)
	}



   let loader = this.loadingCtrl.create({
      content: "Please wait...",
       });
     loader.present();
  
  var link = this.web.webservice+'webservicedelete_report';
        var data = JSON.stringify({

        report_id:localStorage['id'],
        time:this.total,
        status:this.popstatus

         });
         this.http.post(link, data)
         .subscribe(data => {
              loader.dismiss();
    
           
           console.log('hy'+data);
            console.log(data._body);
    let alert=this.alertCtrl.create({
  title:'Pin Toggled Succesfully!',
  buttons:['Ok']

});
alert.present();
           this.navCtrl.setRoot(ReportIncidentPage);
          
         }, error => {
             console.log(error);
               loader.dismiss();
               });


}
}
