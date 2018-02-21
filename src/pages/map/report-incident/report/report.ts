


import { Component } from '@angular/core';
import { NavController , NavParams , AlertController ,LoadingController } from 'ionic-angular';
import{ReportIncidentPage}from'../report-incident';
import{ Popover3Page}from'./popover3/popover3';
import { PopoverController} from 'ionic-angular';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import { File,ImagePicker,Transfer,Camera } from 'ionic-native';
declare var cordova: any;
declare var FileTransfer;


@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
   goalsStateactive1:number=0;
  goalsStateactive2:number=0;
  goalsStateactive3:number=0;
  goalsStateactive:string='';

      time;
      date;
      description;
      data;
      http;
      webb;
      lat;
      lng;
      title;
      value;
      carburn;
      value1;
      value2;
      value3;
      date1;
      time1;
      latitude;
      longitude;
      incident_type;
      typeofincident: string[] = [];
      public apic:string;
       public bpic:string;
        public cpic:string;
         public dpic:string;
        loader;
        mode;
    moving;
    hidden;
    comment1;
    reports;
    happened;
    officer_name;
   officer_identity;
race;
gender;
age;
type_of_officer;

     incident
     incident_reason
     ticket
     citation
     fine
     arrest
     charge
     jail_time
     Property_damage
     damage

     Property_confiscation


       property_taken
     total_lost
    injury
     describe_injury
     injury_reason
     warning
     death
flag1;
flag2;


  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,public navParams:NavParams ,
    public loadingCtrl: LoadingController,public alertCtrl: AlertController,http: Http ,public web:WebserviceUrl) {
     this.latitude=this.navParams.get('latitude');
     this.longitude=this.navParams.get('longitude');
     // this.date1=this.navParams.get('date');
     // this.time1=this.navParams.get('time');
     this.mode=this.navParams.get('md');
     this.moving=this.navParams.get('mv');
     this.hidden=this.navParams.get('hd');
     this.comment1=this.navParams.get('cm');

this.reports=this.navParams.get('reports');
     this.happened=this.navParams.get('happened');
     this.officer_name=this.navParams.get('officer_name');
     this.officer_identity=this.navParams.get('officer_identity');
     this.race=this.navParams.get('race_identity');
     this.gender=this.navParams.get('gender');
     this.age=this.navParams.get('age');
     this.type_of_officer=this.navParams.get('type_of_officer');
this.date1=this.navParams.get('date1');
this.time1=this.navParams.get('time1');



     this.incident=this.navParams.get('incident');
     this.incident_reason=this.navParams.get('incident_reason');
     this.ticket=this.navParams.get('ticket');
     this.citation=this.navParams.get('citation');
     this.fine=this.navParams.get('fine');
     this.arrest=this.navParams.get('arrest');
     this.charge=this.navParams.get('charge');
     this.jail_time=this.navParams.get('jail_time');
     this.Property_damage=this.navParams.get('Property_damage');
     this.damage=this.navParams.get('damage');

     this.Property_confiscation=this.navParams.get('Property_confiscation');


       this.property_taken=this.navParams.get('property_taken');
     this.total_lost=this.navParams.get('total_lost');
     this.injury=this.navParams.get('injury');
     this.describe_injury=this.navParams.get('describe_injury');
     this.injury_reason=this.navParams.get('injury_reason');
     this.warning=this.navParams.get('warning');
     this.death=this.navParams.get('death');

     // alert(this.reports+','+this.happened+','+this.officer_name+','+this.officer_identity+','+this.race+','+this.gender+','+this.age+','+this.type_of_officer+','+this.date1+','+this.time1);
     this.date='';
    this.time='';
    this.description='';
    this.incident_type='';
     this.data={};
     this.data.response='';
    this.http = http;
    this.title='';
    this.value='';
 this.apic = "img/logo.png"
 this.bpic = "img/logo.png"
 this.cpic = "img/logo.png"
 this.dpic = "img/logo.png"
 this.value1="car-burn";
    this.value2=null;
    this.value3=null;
    this.flag1=null;
    this.flag2=null;
  }

  ionViewDidLoad() {
    console.log('Hello ReportPage Page');
  
  }
 submitt()
  {
    
    //       let partial = {
    //        description:this.data.description,
    //         time:this.data.time,
    //         date:this.data.date,
    //         longitude:this.longitude,
    //         latitude:this.latitude,
    //         incident_type:this.typeofincident,
    //         title:this.data.title,
            

    // };
    if(this.value1!=null)     
    this.typeofincident.push(this.value1);
  if(this.value2!=null)  
    this.typeofincident.push(this.value2);
  if(this.value3!=null) 
    this.typeofincident.push(this.value3);
          let partial = {
           description:this.data.description,
            time:this.data.time,
            date:this.data.date,
            longitude:this.longitude,
            latitude:this.latitude,
            title:this.data.title,
            // image1:this.flag1,
            // image2:this.flag2

    };

    // let mandatoryFields: string[] = [];
    //   if (!partial.description) {
    //         mandatoryFields.push('Description');
    //     }
    //     if (!partial.time) {
    //         mandatoryFields.push('Time of incident');
    //     }
    //     if (!partial.date) {
    //         mandatoryFields.push('Date of incident');
    //     }
    //     if (!partial.incident_type) {
    //         mandatoryFields.push('Type of incident');
    //     }
    //     if (!partial.title) {
    //         mandatoryFields.push('Incident Tittle');
    //     }
        
    //     if (mandatoryFields.length > 0) {
    //         this.alertCtrl
    //             .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
    //             .present();
    //         return;
    //     }

    let mandatoryFields: string[] = [];
    if (this.value1==null && this.value2==null && this.value3==null) {
            mandatoryFields.push('Type of incident');
        }
      if (!partial.description) {
            mandatoryFields.push('Description');
        }
        // if (!partial.image1 || !partial.image2) {
        //     mandatoryFields.push('please upload images');
        // }
        // if (!partial.image2) {
        //     mandatoryFields.push('upload image 2');
        // }
        
        if (!partial.title) {
            mandatoryFields.push('Incident Tittle');
        }
        // if (!partial.type) {
        //     mandatoryFields.push('Type of Incident');
        // }
        if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
                .present();
            return;
        }
 
        this.loader = this.loadingCtrl.create({content: "Please wait while your pin is updating..."});
        this.loader.present();
        var error;
        this.latitude=this.navParams.get('latitude');
        this.longitude=this.navParams.get('longitude');
        var link = this.web.webservice+'webservicereport_incident';
        var data = JSON.stringify({

           user_id:localStorage['pk'],
        description:this.data.description,
        // time:this.data.time,
        // date:this.data.date,
         time:this.time1,
        date:this.date1,
        longitude:this.longitude,
        latitude:this.latitude,
        incident_type:this.typeofincident,
        title:this.data.title,
        type_of_vehicle:this.mode,
        moving:this.moving,
        hidden:this.hidden,
        other_information:this.comment1,
        reports:this.reports,
        happened:this.happened,
        officer_name:this.officer_name,
        officer_identity:this.officer_identity,
       race:this.race,
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
           // loader.dismiss();
         this.data.response = data._body;
          
             if(JSON.parse(data._body).response==true){
            if(this.apic=='img/logo.png'||this.bpic=='img/logo.png')
            {
               this.loader.dismiss();
                   let alert = this.alertCtrl.create({title:'Report',subTitle:'Your Report has been Successfully Added',buttons: ['OK']});
              alert.present();
              this.navCtrl.setRoot(ReportIncidentPage);
            }
            else{
                this.loader.dismiss();
               this.asubmit(JSON.parse(data._body).report_id);
            }

 // let alert = this.alertCtrl.create({title: 'Sucess!',buttons: ['OK']});
 //              alert.present();
          
             // this.navCtrl.setRoot(ReportIncidentPage);

            }
              else if(JSON.parse(data._body).response==false){
              error=JSON.parse(data._body).message;
              let alert = this.alertCtrl.create({title: 'Missing Fields!',subTitle: error,buttons: ['OK']});
              alert.present();
              this.loader.dismiss();
            }
           console.log('hy'+data);
        }, error => {
             console.log(error);
        });
  	// this.navCtrl.setRoot(ReportIncidentPage)
  }
  asubmit(id:number){
       // alert(id);
       // alert(this.apic)
       // alert(this.bpic)
       // alert(this.cpic)
       // alert(this.dpic)
   
          FileTransfer = new Transfer();
          var options: any;
          options = {
            fileKey: "image1",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
          FileTransfer.upload(this.apic, "http://18.221.76.63/ngao/webserviceincident_images/" + id ,options)
    
            var aoption: any;
          aoption = {
            fileKey: "image2",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
 FileTransfer.upload(this.bpic, "http://18.221.76.63/ngao/webserviceincident_images/" + id ,aoption)
   


        var boption: any;
          boption = {
            fileKey: "image3",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
          FileTransfer.upload(this.cpic, "http://18.221.76.63/ngao/webserviceincident_images/" + id ,boption) 
      



     var coption: any;
          coption = {
            fileKey: "image4",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
          FileTransfer.upload(this.dpic, "http://18.221.76.63/ngao/webserviceincident_images/" + id ,coption)
          .then(data => {
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Report!',
               subTitle: 'Your Report has been Successfully Added',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.setRoot(ReportIncidentPage);
           }, (err) => {
             // alert(JSON.stringify(err))
             this.loader.dismiss();
           })
    }
    



//   toggleActive(a) {
    
//     if (a==1)
//     {
//       if( this.goalsStateactive1==0)
//         {
//           this.goalsStateactive1 =1;

        
//         }       
//       else{
//         this.goalsStateactive1=0;
//       }
//     }
//     if (a==2)
//     {
//       if( this.goalsStateactive2==0)
//         {
//           this.goalsStateactive2 =1;

//         }       
//       else{
//         this.goalsStateactive2=0;
//       }
//     }if (a==3)
//     {
//       if( this.goalsStateactive3==0)
//         {
//           this.goalsStateactive3 =1;
//         }       
//       else{
//         this.goalsStateactive3=0;
//       }
//     }
// console.log(this.goalsStateactive1);
// console.log(this.goalsStateactive2);
// console.log(this.goalsStateactive3);
// console.log(this.goalsStateactive);

// if(this.goalsStateactive1==1)
// {
//  this.value='carburn';
//  console.log(this.value);
//  this.typeofincident.push(this.value);
//  console.log(this.typeofincident);

// }
// if(this.goalsStateactive1==0)
// {
//  this.value='carburn';
//  // console.log(this.value);
//   var index = this.typeofincident.indexOf(this.value);
//     this.typeofincident.splice(index, 1);

// }

//  if(this.goalsStateactive2==1)
// {
//   this.value='fuelprice';
//  // console.log(this.value);
//  this.typeofincident.push(this.value);
//  console.log(this.typeofincident);

// }
//  if(this.goalsStateactive2==0)
// {
//   this.value='fuelprice';
//  // console.log(this.value);
//  var index = this.typeofincident.indexOf(this.value);
//   this.typeofincident.splice(index, 1);

// }
//  if(this.goalsStateactive3==1)
// {
//   this.value='mapissue';
//  console.log(this.value);
//  this.typeofincident.push(this.value);
//  console.log(this.typeofincident);

// }
// if(this.goalsStateactive3==0)
// {
//   this.value='mapissue';
//   var index = this.typeofincident.indexOf(this.value);
//   this.typeofincident.splice(index, 1);

// }

// }
toggleActive(a) {
    
    if (a==1)
    {
      console.log(a)
      if( this.goalsStateactive1==0)
        {
          this.goalsStateactive1 =1;
           this.value1='carburn';
             // console.log(this.value);
             // // this.typeofincident.push(this.value);
             // console.log(this.typeofincident);
        
        }       
      else{
        this.goalsStateactive1=0;
        this.value1=null;
      }
    }
    if (a==2)
    {
      if( this.goalsStateactive2==0)
        {
          this.goalsStateactive2 =1;
          this.value2='fuelprice';

        }       
      else{
        this.goalsStateactive2=0;
        this.value2=null;
      }
    }if (a==3)
    {
      if( this.goalsStateactive3==0)
        {
          this.goalsStateactive3 =1;
           this.value3='mapissue';
        }       
      else{
        this.goalsStateactive3=0;
        this.value3=null;
      }
    }
console.log(this.goalsStateactive1);
console.log(this.goalsStateactive2);
console.log(this.goalsStateactive3);
console.log(this.goalsStateactive);
}

presentPopover() {

    let popover = this.popoverCtrl.create(Popover3Page);
   
    popover.present({});
  }

 auploadpic(a){
  if(a==2){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.JPEG,
      targetHeight:500,
      targetWidth:500,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.apic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})

  }else if(a==1){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
      targetHeight:300,
      targetWidth:300,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.apic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
  }
  //alert(this.pic)
 }
buploadpic(a){
  if(a==2){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.JPEG,
      targetHeight:500,
      targetWidth:500,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.bpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
    // let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
    // ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
  }else if(a==1){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
      targetHeight:300,
      targetWidth:300,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.bpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
  }
  //alert(this.pic)
 }
 cuploadpic(a){
  if(a==2){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.JPEG,
      targetHeight:500,
      targetWidth:500,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.cpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
   
  }else if(a==1){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
      targetHeight:300,
      targetWidth:300,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.cpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
  }


this.flag1=1

  //alert(this.pic)
 }

duploadpic(a){
  if(a==2){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.JPEG,
      targetHeight:500,
      targetWidth:500,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.dpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
    // let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
    // ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
  }else if(a==1){
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
      targetHeight:300,
      targetWidth:300,
      saveToPhotoAlbum: false
    }).then((imageData) => {
    this.dpic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Cancelled')})
  }

this.flag2=1
  //alert(this.pic)
 }




}
