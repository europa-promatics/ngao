import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import{ReportPage}from'./report/report';
import { PopoverController} from 'ionic-angular';
import{DashboardpopupPage}from'./dashboardpopup/dashboardpopup';
import { WebserviceUrl } from '../../../providers/webservice-url';
import  { Http } from '@angular/http';
import {IncidentdetailsPage}from'./incidentdetails/incidentdetails';
import{InfoincidentPage}from'../../infoincident/infoincident';

// declare var require:any;
declare var google;

@Component({
  selector: 'page-report-incident',
  templateUrl: 'report-incident.html'
})
export class ReportIncidentPage {
  @ViewChild('map') mapElement: ElementRef;
  Incident;
  map : any ; 
  latLng : any ;
  abc:any;
   data;
  http;
   webb;
    lat;
    lng;
    datavalue;
    joindate;
    showtime;
    Popup:boolean;
    Popup2:boolean;
    Popup3:boolean;
    Popup4:boolean;
    Popup5:boolean;
     Popup7:boolean;
    topup4:boolean;
    mode;
    moving;
    hidden;
    comment1;
    datasvalue;
    Popup6;
    check;
    checking=1;
    compare;
    Popup8;
    Popup9;
    Popup10;
    Popup11;
    Popup12;
    Popup13;
    Popup14;
    Popup15;
    Popup16;
    Popup17;
    Popup18;
    Popup19;
    Popup20;
    Popup21;
    Popup22;
    Popup23;
    pet;
    pet1;
    pet2;
       gender;
       officer;
       reports;
       happened;
officer_name;
officer_identity;
race;
age;
type_of_officer;
race_identity;
time1
date1;
incident;
incident_reason;
warning;
death;
injury;
describe_injury;
injury_reason;
ticket;
citation;
fine;
arrest;
charge;
jail_time;
Property_damage;
damage;
Property_confiscation;
property_taken;
total_lost;
flashcardmap
reports1;
title;
date;
times;
officer_name1;
officer_identity1
race1
gender1
age1
type_of_officer1

flashcardmap1;
flashcardmap2;
image1;
image2;
image3;
image4;

incident1




incident_reason1
ticket1
citation1
fine1
arrest1
charge1
jail_time1
property_damage1
damage1
property_confiscation1
property_taken1
total_lost1
warning1
death1
injury1
describe_injury1
injury_reason1

description
title1;

flashcardmap3;

flashcardmap4;

Popup786;
go=[]

    public tap: number = 0;
     markers: any = [];
     beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public popoverCtrl: PopoverController, http: Http,public web:WebserviceUrl) {
this.check=0;
       this.data = {};
       this.datavalue = {};
       this.data.response = '';
        this.lat ='';
       this.lng = '';
        this.http = http;
        this.abc='';
        this.description='';
        this.title1='';
        this.go=[1,2,3]
this.Popup=false;
this.Popup2=false;
this.Popup3=false;
this.Popup4=false;
this.Popup5=false;
this.topup4=false;
this.Popup6=false;
this.Popup7=false;
this.Popup8=false;
this.Popup9=false;
this.Popup10=false;
this.Popup11=false;
this.Popup12=false;
this.Popup13=false;
this.Popup14=false;
this.Popup15=false;
this.Popup16=false;
this.Popup17=false;
this.Popup18=false;
this.Popup19=false;
this.Popup20=false;
this.Popup21=false;
this.Popup22=false;
this.Popup23=false;
this.Popup786=false;
  }
  checkcheckcheck()
  {

  	
  	this.Popup23=false;
   let confirm = this.alertCtrl.create({
      title:'Do you want to continue with more details?',
      // message:'with more details?',
      buttons: [
        {
          text: 'No thanks!',
          handler: () => {
          this.optional()
          }
        },
        {
          text: 'Agree',
          handler: () => {
           this.navCtrl.push(ReportPage,{
           longitude:this.lng,latitude:this.lat,date:localStorage['bt'],time:this.showtime,md:this.mode,
           mv:this.moving,hd:this.hidden,cm:this.comment1,reports:this.reports,happened:this.happened,officer_name:this.officer_name,
           officer_identity:this.officer_identity,race_identity:this.race_identity,gender:this.gender,age:this.age,
           type_of_officer:this.type_of_officer,date1:this.date1,time1:this.time1,incident:this.incident,
           incident_reason:this.incident_reason,ticket:this.ticket,citation:this.citation,fine:this.fine,
           arrest:this.arrest,charge:this.charge,jail_time:this.jail_time,Property_damage:this.Property_damage,
           damage:this.damage,Property_confiscation:this.Property_confiscation,property_taken:this.property_taken,total_lost:this.total_lost,
           injury:this.injury,describe_injury:this.describe_injury,injury_reason:this.injury_reason,warning:this.warning,death:this.death

             


        })

          }
        }
      ]
    });
    confirm.present();



  }
  optional()
  {
 let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();

 var link = this.web.webservice+'webservicereport_incident';
        var data = JSON.stringify({

           user_id:localStorage['pk'],
        description:this.description,
         time:this.time1,
        date:this.date1,
        longitude:this.lng,
        latitude:this.lat,
        incident_type:this.go,
        title:this.title1,
        type_of_vehicle:this.mode,
        moving:this.moving,
        hidden:this.hidden,
        other_information:this.comment1,
        reports:this.reports,
        happened:this.happened,
        officer_name:this.officer_name,
        officer_identity:this.officer_identity,
       race:this.race_identity,
          gender:this.gender,
        age:this.age,
         type_of_officer:this.type_of_officer, 

         incident:this.incident ,
        incident_reason:this.incident_reason,
           ticket:this.ticket,


 citation:this.citation,
     fine:this.fine,
     arrest:this.arrest,
     charge:this.charge,

     jail_time:this.jail_time,
     Property_damage:this.Property_damage,
     damage:this.damage,

     Property_confiscation:this.Property_confiscation,


       property_taken:this.property_taken,
     total_lost:this.total_lost,
    injury:this.injury,
     describe_injury:this.describe_injury,
     injury_reason:this.injury_reason,
     warning:this.warning,
     death:this.death
 });
         this.http.post(link, data)
         .subscribe(data => {
           loader.dismiss();
         this.data.response = data._body;
          
             
             
           console.log('hy'+data);
        }, error => {
        	loader.dismiss();
             console.log(error);
        });
  }
more()
{
  this.flashcardmap1=false
this.flashcardmap2=true
}
 modes3()
 {
 	var x=document.getElementById('p1')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
	this.Popup10=false;
	this.addMarker1();

},2000);

 }

  testpop(){
this.Popup8=true;
}

incidentmodes(f)
{
if(f==1)
{
var x=document.getElementById('i1')
x.style.border="5px solid rgb(0, 169,255)"
this.reports='Positive'
setTimeout(()=>
{

  this.Popup8=false
this.Popup9=true
},1000);

} else if(f==2)
{
var x=document.getElementById('i2')
x.style.border="5px solid rgb(0, 169,255)"

this.reports='Negative'
setTimeout(()=>
{
  this.Popup8=false
this.Popup13=true
},1000);
// this.mode='MotorCycle'
// alert(this.mode)
}
}

  yes1()
  {

let alert=this.alertCtrl.create({
  title:'Sorry you are 100 meter away from this location!!',
  buttons:['Ok']

});
alert.present();
 this.Popup7=false

  }
  no1()
  {

let alert=this.alertCtrl.create({
  title:'Sorry you are 100 meter away from this location!!',
  buttons:['Ok']

});
alert.present();  
 this.Popup7=false
  }
  close1()
  {
    
this.Popup=false;
  }
  close2()
  {
this.Popup2=false;
  }
    close3()
  {
this.Popup3=false;
  }
    close4()
  {
this.Popup4=false;
  }
    close5()
  {
this.Popup5=false;
  } 

close6()
{
  this.Popup6=false
}


close7()
{
    this.Popup7=false
}
close8()
{
	this.Popup8=false
}
close9()
{
	this.Popup9=false;
}
close10()
{
	this.Popup10=false;
}
close11()
{
	this.Popup11=false;
}
close12()
{
	this.Popup12=false;
}
close13()
{
this.Popup13=false;
}
close14()
{
this.Popup14=false;
}
close15()
{
this.Popup15=false;
}
close16()
{
this.Popup16=false;
}

close17()
{
this.Popup17=false;
}
close18()
{
this.Popup18=false;
}
close19()
{
this.Popup19=false;
}
close20()
{
	this.Popup20=false
}
close21()
{
	this.Popup21=false
}

close22()
{
	this.Popup22=false
}
close23()
{
	this.Popup23=false
}
close100()
{
  this.flashcardmap=false
}
close101()
{
   this.flashcardmap1=false
}
close102()
{
     this.flashcardmap2=false
       this.flashcardmap3=true


}
moreimage()
{
  this.flashcardmap3=false
   this.flashcardmap4=true
}
moreimage2()
{

  this.flashcardmap=false
  this.flashcardmap4=true
}





close103()
{
        this.flashcardmap3=false

       
}
close110()
{
   this.flashcardmap4=false
}
NextSave(){

       this.Popup11=false

 let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();
        var link = this.web.webservice+'webserviceofficer_details';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
           	this.Popup12=true
                console.log(data);
                console.log(data._body);
               console.log(JSON.parse(data._body).officer)
                console.log(JSON.parse(data._body).race)
               this.officer=JSON.parse(data._body).officer
               this.race=JSON.parse(data._body).race
                
                
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });



}
NextnextSave()
{
	this.Popup13=false;
	this.Popup14=false;
	this.Popup15=true
}


checkcheck()
{

this.Popup12=false

  let confirm = this.alertCtrl.create({
      title:'Do you want to continue with more details?',
      // message:'with more details?',
      buttons: [
        {
          text: 'No thanks!',
          handler: () => {
           this.optional();
          }
        },
        {
          text: 'Agree',
          handler: () => {
this.navCtrl.push(ReportPage,{
           longitude:this.lng,latitude:this.lat,date:localStorage['bt'],time:this.showtime,md:this.mode,
           mv:this.moving,hd:this.hidden,cm:this.comment1,reports:this.reports,happened:this.happened,officer_name:this.officer_name,
           officer_identity:this.officer_identity,race_identity:this.race_identity,gender:this.gender,age:this.age,
           type_of_officer:this.type_of_officer,date1:this.date1,time1:this.time1,incident:this.incident,
           incident_reason:this.incident_reason,ticket:this.ticket,citation:this.citation,fine:this.fine,
           arrest:this.arrest,charge:this.charge,jail_time:this.jail_time,Property_damage:this.Property_damage,
           damage:this.damage,Property_confiscation:this.Property_confiscation,property_taken:this.property_taken,total_lost:this.total_lost,
           injury:this.injury,describe_injury:this.describe_injury,injury_reason:this.injury_reason,warning:this.warning,death:this.death
    })

          }
        }
      ]
    });
    confirm.present();


}
torper()
{

     var mydDate= new Date().toISOString();
     // alert('date'+mydDate)
     var a=parseInt(mydDate)
    var myDate = +new Date(mydDate)
    // alert(myDate);




}
close45()
{
  this.flashcardmap=false
}
petChange()
{
	this.pet
	// alert(this.pet)
if(this.pet=='notfine')
{
  this.happened="Could have but did not fine"
	setTimeout(()=>
	{this.Popup9=false,this.Popup10=true},1000
)
}
else if(this.pet=='help')
{

   this.happened="Helped Me"
	setTimeout(()=>
	{this.Popup9=false,this.Popup10=true},1000)
}
else if(this.pet=='impacted')
{
     this.happened="Solved a crime that impacted"
	setTimeout(()=>
	{this.Popup9=false,this.Popup10=true},1000)
}
else if(this.pet=='other')
{

  this.happened="other"
	setTimeout(()=>
	{this.Popup9=false,this.Popup10=true},1000)
}

}
petChange2()
{
this.pet1;


if(this.pet1=='Frisk')
{
	// alert(this.pet1)
   this.happened="Stop and Frisk"
setTimeout(()=>

{this.Popup16=true,
this.Popup15=false,
this.Popup13=false
}
,1000	)
}

else if(this.pet1=='Traffic')
{
	// alert(this.pet1)



  this.happened="Traffic Stop"
setTimeout(()=>

{this.Popup16=true,
this.Popup15=false,
this.Popup13=false
}
,1000	)
}

else if(this.pet1=='home')
{
	// alert(this.pet1)
  this.happened="Came to my home"
setTimeout(()=>

{this.Popup16=true,
this.Popup15=false,
this.Popup13=false
}
,1000	)
}

else if(this.pet1=='police')
{
   this.happened="I called the police"
	// alert(this.pet1)
setTimeout(()=>

{this.Popup16=true,
this.Popup15=false,
this.Popup13=false
}
,1000	)
}

else if(this.pet1=='Other')
{
  this.happened="Other"
	// alert(this.pet1)
setTimeout(()=>

{this.Popup16=true,
this.Popup15=false,
this.Popup13=false
}
,1000	)
}
}
NextnextnextSave()
{
	// alert(this.pet1)

this.Popup15=false,
this.Popup13=false
 let loader = this.loadingCtrl.create({
            content: "Please wait..",
        });

        loader.present();
        var link = this.web.webservice+'webserviceofficer_details';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
      this.Popup16=true
                console.log(data);
                console.log(data._body);
               console.log(JSON.parse(data._body).officer)
                console.log(JSON.parse(data._body).race)
               this.officer=JSON.parse(data._body).officer
               this.race=JSON.parse(data._body).race
                
                
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });




}
TICKETSave()
{
	this.Popup23=true
	this.Popup17=false
}

FineSave()
{
	this.Popup23=true
	this.Popup18=false
}

chargeSave()
{
	this.Popup23=true
	this.Popup19=false
}
damageSave()
{
	this.Popup23=true
	this.Popup20=false
}
propertySave()
{
	this.Popup23=true
	this.Popup21=false
}

injurySave()
{
	this.Popup23=true
	this.Popup22=false
}



petChange3()
{
this.pet2;
// alert(this.pet2)

if(this.pet2=='Ticket')
{

this.ticket="ticket"
 setTimeout(()=>

 {this.Popup17=true,

 this.Popup16=false
 }
 ,1000	)
}

else if(this.pet2=='Fine')
{

 setTimeout(()=>

 {this.Popup18=true,

 this.Popup16=false
 }
 ,1000	)
}

else if(this.pet2=='Arrest')
{

this.arrest="arrest"
 setTimeout(()=>

 {this.Popup19=true,

 this.Popup16=false
 }
 ,1000	)
}
else if(this.pet2=='damage')
{
this.Property_damage="Property_damage"

 setTimeout(()=>

 {this.Popup20=true,

 this.Popup16=false
 }
 ,1000	)
}
else if(this.pet2=='confiscation')
{


this.Property_confiscation="Property_confiscation"
 setTimeout(()=>

 {this.Popup21=true,

 this.Popup16=false
 }
 ,1000	)



}
else if(this.pet2=='injury')
{
  this.injury="injury"
	setTimeout(()=>

 {this.Popup22=true,

 this.Popup16=false
 }
 ,1000	)
}

else if(this.pet2=='death')
{

  this.death="death"
	setTimeout(()=>

 {this.Popup23=true,

 this.Popup16=false
 }
 ,1000	)

}
else if(this.pet2=='Warning')
{


  this.warning="warning"
	setTimeout(()=>

 {this.Popup23=true,

 this.Popup16=false
 }
 ,1000	)

}



}


genderChange(lol)
{
// alert(this.gender)
}
info()
{
  this.navCtrl.push(InfoincidentPage,{longitude:this.lng,latitude:this.lat});
}

negativemodes3()
{
	var x=document.getElementById('p1')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
	this.Popup13=false;
	this.addMarker11();

},2000);


}



  Save()
  {

  var saveTime= new Date().getTime();
    // alert(saveTime);
    localStorage['saveTime']=saveTime;
let partial = {
           comment:this.comment1
    
    };
    let mandatoryFields: string[] = [];


   if (!partial.comment) {
            mandatoryFields.push('Comment your view');
        }

   if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
                .present();
            return;
        }

     var myDate:String= new Date().toISOString();
   // alert(myDate);
   localStorage['datetime']=myDate;
// alert(localStorage['datetime'])
     let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webservicepinDrop';
        var data = JSON.stringify({
         user_id:localStorage['pk'],
         longitude:this.lng,
         latitude:this.lat,
         datetime:localStorage['datetime'],
         type_of_vehicle:this.mode,
         moving:this.moving,
         hidden:this.hidden,
         other_information:this.comment1
});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                console.log(data);
                console.log(data._body); 
                 this.Popup5=false;
                console.log(JSON.parse(data._body).pin_id);
                localStorage['pinid']=JSON.parse(data._body).pin_id;
                this.droppin();
          setTimeout(()=>
{
  this.deletedrop(); 
},3720000);
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });
              
  }
  droppin()
  {

let alert=this.alertCtrl.create({
  title:'Your Pin will disappear after 60 minutes from map',
  buttons:['Ok']

});
alert.present();
    let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webserviceshow_incidents';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                console.log(data);
                console.log(data._body); 
              console.log(JSON.parse(data._body).incidents[0].title);

               console.log(JSON.parse(data._body).pindrops[0].date);
                this.datavalue=JSON.parse(data._body).pindrops;
                     // localStorage['datapin']=this.datavalue
                this.addMarker(this.lat,this.lng);
                 

            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });
  }
  SaveSkip()
  {
        
    // var mydDate= new Date().getTime();
    //  alert('date'+mydDate)
    // var a=parseInt(mydDate)
    var saveTime= new Date().getTime();
    // alert(saveTime);
    localStorage['saveTime']=saveTime;
    var myDate:String= new Date().toISOString();
   // alert(myDate);
   localStorage['datetime']=myDate;
   var a
 var breaktime=myDate.split("T")
 // alert('hi'+breaktime[0]);
localStorage['bt']=breaktime[0];
// alert('bi'+localStorage['bt'])
 // alert('bi'+breaktime[1]);
 var rep:string=breaktime[1]
this.showtime=rep.substr(0,5);
   // alert('actualtime'+this.showtime)

localStorage['showtime']=this.showtime;

// alert('addtime'+localStorage['showtime']);
     var myDate:String= new Date().toISOString();
   // alert(myDate);
   localStorage['datetime']=myDate;
   // alert(localStorage['datetime'])
    let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webservicepinDrop';
        var data = JSON.stringify({
         user_id:localStorage['pk'],
         longitude:this.lng,
         latitude:this.lat,
         datetime:localStorage['datetime'],
         type_of_vehicle:this.mode,
         moving:this.moving,
         hidden:this.hidden,
         other_information:'null'
});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                console.log(data);
                console.log(data._body);  
               this.Popup4=false;
                  console.log(JSON.parse(data._body).pin_id);
                  localStorage['pinid']=JSON.parse(data._body).pin_id;
                   this.droppin();
                   this.check=1
                   setTimeout(()=>
{
  this.deletedrop(); 
  
},3720000);
                  
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });


  }
  deletedrop()
  {
    // alert(localStorage['pinid'])
    // alert(this.check);
        var link = this.web.webservice+'webservicedeletePinDrop';
        var data = JSON.stringify({
         user_id:localStorage['pk'],
         pin_id: localStorage['pinid']
});

        this.http.post(link, data)
            .subscribe(data => {
           
                console.log(data);
                console.log(data._body);  
          setTimeout(()=>
{
  this.refresh(); 
},1000);
 
            }, error => {
           console.log("Oooops!");
            });

  }
  refresh()
  {
    // alert('refresh');
 // let loader = this.loadingCtrl.create({
 //            content: "Updating Pins..",
 //        });

        // loader.present();
        var link = this.web.webservice+'webserviceshow_incidents';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                // loader.dismiss();
                // this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                console.log(JSON.parse(data._body).incidents[0]);
                this.datasvalue=JSON.parse(data._body).incidents;
                 this.datavalue=JSON.parse(data._body).pindrops;
                 this.loadMap();
              
                var i=0;
                
                
                
            }, error => {
               // loader.dismiss();
                console.log("Oooops!");
            });


  }
  modes(e)
  {
// alert(e);
if(e==1)
{
var x=document.getElementById('a2')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  this.Popup=false
this.Popup2=true
},1000);
this.mode='Automobile'
// alert(this.mode)
} else if(e==2)
{
var x=document.getElementById('a3')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  this.Popup=false
this.Popup2=true
},1000);
this.mode='MotorCycle'
// alert(this.mode)
}
else if(e==3)
{
var x=document.getElementById('a4')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  this.Popup=false
 this.Popup2=true 
},1000);
this.mode='Bicycle'
// alert(this.mode)
}
else if(e==4)
{
var x=document.getElementById('a5')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  this.Popup=false
this.Popup2=true
},1000);
this.mode='OnFoot'
// alert(this.mode)
}
  }
  mode1(f)
  {
// alert(f);
if(f==1)
{
var x=document.getElementById('b1')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  
this.Popup2=false;
this.Popup3=true;

},1000);
this.moving='moving'
// alert(this.moving)
  } else if(f==2)
  {
var x=document.getElementById('b2')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  
this.Popup2=false;
this.Popup3=true;
},1000);
this.moving='stationary'
// alert(this.moving)
  }
  }
  mode2(g)
  {
    // alert(g)
    if(g==1)
{
var x=document.getElementById('c1')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  
this.Popup3=false;
this.Popup4=true;

},1000);
this.hidden='Visible'
// alert(this.hidden)
  } else if(g==2)
  {
var x=document.getElementById('c2')
x.style.border="5px solid rgb(0, 169,255)"
setTimeout(()=>
{
  
this.Popup3=false;
this.Popup4=true;
},1000);
this.hidden='Hidden'
// alert(this.hidden)
  }
  }
  mode3()
  {
var x=document.getElementById('d')
x.style.border="5px solid rgb(0, 169,255)"

setTimeout(()=>
{
  
this.Popup5=true
this.Popup4=false
// this.Popup4=false;
},1000);

  }
  report()
  {
    // alert(this.comment1);
    this.Popup4=false;
    var myDate:String= new Date().toISOString();
   // alert(myDate);
   localStorage['datetime']=myDate;
   var a
 var breaktime=myDate.split("T")
 // alert('hi'+breaktime[0]);
localStorage['bt']=breaktime[0];
// alert('bi'+localStorage['bt'])
 // alert('bi'+breaktime[1]);
 var rep:string=breaktime[1]
this.showtime=rep.substr(0,5);
// alert(this.showtime);
     // this.navCtrl.push(ReportPage,{
     //      longitude:this.lng,latitude:this.lat,date:localStorage['bt'],time:this.showtime,md:this.mode,mv:this.moving,hd:this.hidden,cm:this.comment1
     //    })
  }

  time()
  {
// alert(localStorage['lngpop'])


let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        let R = earthRadius['miles'];
        let lat1 = this.lat;
        let lon1 =  this.lng;
        let lat2 = localStorage['latpop'];
        let lon2 = localStorage['lngpop'];
        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
      // alert(d);
  
if(d>0.0621371)
{this.Popup7=true
}
else{
this.Popup6=true
}

     // var mydDate= new Date().toISOString();
     // alert('date'+mydDate)
     // var a=parseInt(mydDate)
    // var myDate = +new Date(mydDate)
    // alert(myDate);
//    var myDate:String= new Date().toISOString();
//    alert(myDate);
//    localStorage['datetime']=myDate;
//    var a
//  var breaktime=myDate.split("T")
//  alert('hi'+breaktime[0]);
// localStorage['bt']=breaktime[0];
// alert('bi'+localStorage['bt'])
//  alert('bi'+breaktime[1]);
//  var rep:string=breaktime[1]
// this.showtime=rep.substr(0,5);
//    alert('actualtime'+this.showtime)
   
//    var myDate:String= new Date().toISOString();
// var breaktime;
// var joindate;
//  var retime=breaktime.replace(",","");
//  alert('re'+retime);
//  this.joindate=breaktime.join();
// alert('bi'+joindate);
// var retime=joindate.replace(",","");
// alert('i'+retime);
  





  }

    toRad(x){
        return x * Math.PI / 180;
    }



 tapEvent(e) {
    this.tap++
    // alert(this.tap);
    if(this.tap%2==0)
    {
      // this.addMarker1();
      // setTimeout(()=>{
        this.Popup=true;
        // },3000);

        // alert('bi')
    }
    else{
      // alert('hi')
    }
}
addMarker1(){

let latLng = new google.maps.LatLng(this.lat, this.lng);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng

    });
    setTimeout(()=>{
this.Popup11=true},
1000
)

  }

addMarker11()
{
	let latLng = new google.maps.LatLng(this.lat, this.lng);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng

    });
    setTimeout(()=>{
this.Popup14=true
this.Popup13=false

},
1000
)
}


  
  
 ionViewDidEnter(){

// alert(this.checking)

var mydDate= new Date().getTime();
     // alert('date'+mydDate)
    // var a=parseInt(mydDate)
    var myDate = +new Date(mydDate)
    // alert(myDate);
 //   localStorage['myDate']=myDate;
 let storeTime=parseInt(localStorage['saveTime'])
  
if(this.checking==1)
{
   // alert('check1')
 this.compare=storeTime+62*60*1000;
}
else if(this.checking==2)
{
  // alert('check2')
 this.compare=storeTime+72*60*1000;
}
else if(this.checking==3)
{
    // alert('check3')
    this.compare=storeTime+56*60*1000;
}



   // alert('pin add time'+storeTime)
   // alert('right now time'+this.compare)
    if(myDate>this.compare){
  this.deletedrop();
}else{
//      let alert=this.alertCtrl.create({
//   title:'Your Pin is still visible ',
//   buttons:['Ok']

// });
// alert.present();
    }

     let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webserviceshow_incidents';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                // this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                console.log(JSON.parse(data._body).incidents[0]);
                this.datasvalue=JSON.parse(data._body).incidents;
                 this.datavalue=JSON.parse(data._body).pindrops;
                 this.loadMap();
              
                var i=0;
                
                
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });
            console.log('ionViewDidLoad ReportIncidentPage');
    }


    
    
  

 ionViewDidLeave()
 {
   this.Popup=false;
    this.Popup2=false;
     this.Popup3=false;
      this.Popup4=false;
       this.Popup5=false;
       this.Popup6=false;

 }
 
  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
         let mapEle = document.getElementById('mapp');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      // center: {lat:30.9521287, lng:75.847574},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI:true
 
    });


      google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
        this.addMarker2(this.lat,this.lng);
        this.addMarker(this.lat,this.lng);
        // alert(this.lat);
        // alert(this.lng);
       
    
 
    }, (err) => {
      console.log(err);
    });
 
  }


addMarker2(a,b)
{
  let arr=[];
  let ar=[];
  let tit=[];
  let type=[];
  let i:number=0;
  let j:number=0;
  let k:number=0;
  let l:number=0;
  // console.log(this.beaches.length)
    console.log(this.datasvalue.length)

     for (let data of this.datasvalue){

      arr[i]=data.latitude;
       ar[j]=data.longitude;
       tit[k]=data.report_id;
   
    
     console.log(arr);
     console.log(ar);
     // alert(arr)
      let latLng = new google.maps.LatLng(arr[i], ar[j]);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng

    });
 
    this.markers.push(marker);
    let content = "<b>dsds</b>"; 
  
  this.addInfoWindow(marker,content ,arr[i],ar[j],tit[k]);

     i++;
      j++;
      k++;  
 }
}
addMarker(a,b){
  // alert('hi');
  let arr=[];
  let ar=[];
  let tit=[];
  let type=[];
  let i:number=0;
  let j:number=0;
  let k:number=0;
  let l:number=0;
  // console.log(this.beaches.length)
    console.log(this.datavalue.length)

     for (let data of this.datavalue){

      arr[i]=data.latitude;
       ar[j]=data.longitude;
       tit[k]=data.id;
   
    
     console.log(arr);
     console.log(ar);
     // alert(arr)
      let latLng = new google.maps.LatLng(arr[i], ar[j]);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
icon:icon1
    });
    var icon1 = {
                url: 'assets/icon/pin.png', // url
                scaledSize: new google.maps.Size(33, 46), // scaled size
            };
    this.markers.push(marker);
    let content = ''

  this.addInfoWindow2(marker,content ,arr[i],ar[j],tit[k]);

     i++;
      j++;
      k++;  
 }

 
         }



yes(){
this.checking=2
  // alert(localStorage['mappinid'])
    let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
      loader.present();
    var link = this.web.webservice+'webserviceuser_request';
    var data = JSON.stringify({
    pin_id:localStorage['mappinid'],
    status:'yes'
  });

  this.http.post(link, data)
  .subscribe(data => {
      loader.dismiss();
       this.Popup6=false
      setTimeout(()=>
{
  this.deletedrop();
   this.check=2 
},4320000);
 let alert=this.alertCtrl.create({
  title:'Your Pin will disappear after 70 minutes from map',
  buttons:['Ok']

});
alert.present();
    }, error => {
   loader.dismiss();
      console.log("Oooops!");
    }
  );
}


no()
{
  this.checking=3
localStorage['check']=4
    // alert(localStorage['mappinid'])
  let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webserviceuser_request';
        var data = JSON.stringify({
pin_id:localStorage['mappinid'],
status:'no'
  });

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                 this.Popup6=false
                              
            setTimeout(()=>
{
  this.deletedrop();
   this.check=2 
},3360000);
                
       let alert=this.alertCtrl.create({
  title:'Your Pin will disappear after 55 minutes from map',
  buttons:['Ok']

});
alert.present();          
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });
      
}
//   addInfoWindow2(marker, content,a,b,c){ 

//   let infoWindow = new google.maps.InfoWindow({
//     content: content,
//      maxWidth: 250
//   });
 
//   google.maps.event.addListener(marker, 'click', () => {
//       console.log(a);
//    console.log(b);
//    console.log(c);
// localStorage['mappinid']=c
//    infoWindow.open(this.map, marker);
 
//   });
// }  
addInfoWindow(marker, content,a,b,d){
  
 

 
  google.maps.event.addListener(marker, 'click', () => {

   console.log(a);
   console.log(b);
   // alert(d);
this.showreportdata(d)
 // this.Popup8=true;
 // this.navCtrl.push(IncidentdetailsPage,{a,b});
   // this.Popup6=true;




  });
}
showreportdata(d)
{

// alert('show'+d);

  let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });

        loader.present();
        var link = this.web.webservice+'webservicereport_data';
        var data = JSON.stringify({

report_id:d
  });

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();

               
                console.log(JSON.parse(data._body). report_incidents);
                     console.log(JSON.parse(data._body). report_incidents.title);

                      console.log(JSON.parse(data._body). report_incidents.time);

                        console.log(JSON.parse(data._body). report_incidents.date);
                          console.log(JSON.parse(data._body).report_incidents.reports);
                              console.log(JSON.parse(data._body).report_incidents.reports);
                               console.log(JSON.parse(data._body).report_incidents.image1);
                                console.log(JSON.parse(data._body).report_incidents.image2);
                                 console.log(JSON.parse(data._body).report_incidents.image3);
                                  console.log(JSON.parse(data._body).report_incidents.image4);



 console.log(JSON.parse(data._body).report_incidents.title);
                                console.log(JSON.parse(data._body).report_incidents.time);
                                 console.log(JSON.parse(data._body).report_incidents.date);
                                  console.log(JSON.parse(data._body).report_incidents.description);




 console.log(JSON.parse(data._body).report_incidents.officer_name);
                                console.log(JSON.parse(data._body).report_incidents.officer_identity);
                                 console.log(JSON.parse(data._body).report_incidents.race);
                                  console.log(JSON.parse(data._body).report_incidents.gender);


 console.log(JSON.parse(data._body).report_incidents.age);
                                 console.log(JSON.parse(data._body).report_incidents.type_of_officer);
                                  console.log(JSON.parse(data._body).report_incidents.reports);


this.reports1=JSON.parse(data._body).report_incidents.reports
this.title=JSON.parse(data._body). report_incidents.title
this.date=JSON.parse(data._body).report_incidents.date
this.times=JSON.parse(data._body).report_incidents.time

this.officer_name1=JSON.parse(data._body).report_incidents.officer_name
this.officer_identity1=JSON.parse(data._body).report_incidents.officer_identity

this.race1=JSON.parse(data._body).report_incidents.race

this.gender1=JSON.parse(data._body).report_incidents.gender

this.age1=JSON.parse(data._body).report_incidents.age

this.type_of_officer1=JSON.parse(data._body).report_incidents.type_of_officer







this.image1=JSON.parse(data._body).report_incidents.image1
this.image2=JSON.parse(data._body).report_incidents.image2
this.image3=JSON.parse(data._body).report_incidents.image3
 this.image4=JSON.parse(data._body).report_incidents.image4   


this.incident1=JSON.parse(data._body).report_incidents.incident
this.incident_reason1=JSON.parse(data._body).report_incidents.incident_reason
this.ticket1=JSON.parse(data._body).report_incidents.ticket
this.citation1=JSON.parse(data._body).report_incidents.citation
this.fine1=JSON.parse(data._body).report_incidents.fine
this.arrest1=JSON.parse(data._body).report_incidents.arrest
this.charge1=JSON.parse(data._body).report_incidents.charge
this.jail_time1=JSON.parse(data._body).report_incidents.jail_time
this.property_damage1=JSON.parse(data._body).report_incidents.property_damage
this.damage1=JSON.parse(data._body).report_incidents.damage
this.property_confiscation1=JSON.parse(data._body).report_incidents.property_confiscation
this.property_taken1=JSON.parse(data._body).report_incidents.property_taken
this.total_lost1=JSON.parse(data._body).report_incidents.total_lost
this.warning1=JSON.parse(data._body).report_incidents.warning
this.death1=JSON.parse(data._body).report_incidents.death
this.injury1=JSON.parse(data._body).report_incidents.injury
this.describe_injury1=JSON.parse(data._body).report_incidents.describe_injury
this.injury_reason1=JSON.parse(data._body).report_incidents.injury_reason





                              if(JSON.parse(data._body).report_incidents.reports=="Positive")
                              {
                this.flashcardmap=true
                              }
                               else
                               {
this.flashcardmap1=true
                               }



















//        let alert=this.alertCtrl.create({
//   title:'Your Pin will disappear after 55 minutes from map',
//   buttons:['Ok']

// });
// alert.present();          
                
            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });




}

addInfoWindow2(marker, content,a,b,c){
  
 

 
  google.maps.event.addListener(marker, 'click', () => {

   console.log(a);
   console.log(b);
   console.log(c);
   localStorage['latpop']=a
   localStorage['lngpop']=b
   

   localStorage['mappinid']=c

this.time();


  });
}
addMarker3(a,b)
{
   let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    // icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
    position: {lat:a, lng: b}
  });
 
 

}


submit()
  {
    console.log(this.lat);
     console.log(this.lng);
      

 this.Popup4=false;
    var myDate:String= new Date().toISOString();
   // alert(myDate);
   localStorage['datetime']=myDate;

 var breaktime=myDate.split("T")
 // alert('hi'+breaktime[0]);
localStorage['bt']=breaktime[0];
// alert('bi'+localStorage['bt'])
 // alert('bi'+breaktime[1]);
 var rep:string=breaktime[1]
this.showtime=rep.substr(0,5);
// alert(this.showtime);
//  this.addMarker3(this.lat,this.lng);
//        setTimeout(()=>
// {
 // this.navCtrl.push(ReportPage,{
 //          longitude:this.lng,latitude:this.lat,date:localStorage['bt'],time:this.showtime,md:this.mode,mv:this.moving,hd:this.hidden,cm:this.comment1
 //        })

this.Popup8=true;



// },1500);
     // this.Popup8=true;
   
  }
 


}
