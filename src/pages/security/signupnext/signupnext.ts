import { Component } from '@angular/core';
import { NavController , NavParams , AlertController ,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import{SignupmoreinfoPage}from'../signupmoreinfo/signupmoreinfo';
import { LoginPage } from '../login/login';
import { File,ImagePicker,Transfer,Camera } from 'ionic-native';
import{TermsandconditionsPage}from'../../termsandconditions/termsandconditions'
declare var cordova: any;
declare var FileTransfer;


/*
  Generated class for the Signupnext page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signupnext',
  templateUrl: 'signupnext.html'
})
export class SignupnextPage {
		moreinfo;
		data;
		first_name;
		last_name;
		ethnicity;
		gender;
		age;
		hmistatus;
		address;
		sexual_orientation;
		vehicle_model;
		vehicle_make;
		vehicle_year;
		vehicle_color;
		user_name;
		email;
		password;
		about_you;
		http;
	public pic:string;
        loader;
  constructor(public navCtrl: NavController,public navParams: NavParams, http: Http,
   public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
		this.moreinfo=SignupmoreinfoPage;
		this.data={};
		// this.first_name=this.navParams.get('first_name');
		// this.last_name=this.navParams.get('last_name');
		// this.ethnicity=this.navParams.get('ethnicity');
		// this.gender=this.navParams.get('gender');
		// this.age=this.navParams.get('age');
		// this.sexual_orientation=this.navParams.get('sexual_orientation');
		// this.hmistatus=this.navParams.get('hmistatus');
		// this.address=this.navParams.get('address');
		this.vehicle_model='';
		this.vehicle_make='';
		this.vehicle_year='';
		this.vehicle_color='';
		this.user_name='';
		this.email='';
		this.password='';
		this.about_you='';
		this.data.response='';
		this.http = http;
			 this.pic = "img/logo.png"
  }
   uploadpic(a){
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
    this.pic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Camera is not Working')})
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
    this.pic = "data:image/jpeg;base64," + imageData;
    }, (err) => {alert('Camera is not Working')})
  }
  //alert(this.pic)
 }


 
    submitt()
  { 
   var error;   
   let partial = {
           vehicle_model:this.vehicle_model,
            vehicle_make:this.vehicle_make,
            vehicle_year:this.vehicle_year,
            vehicle_color:this.vehicle_color,
            user_name:this.user_name,
            email:this.email,
            password:this.password
                  
    };
    let mandatoryFields: string[] = [];
    
      // if (!partial.vehicle_model) {
      //       mandatoryFields.push('Vehicle Model');
      //   }
        // if (!partial.vehicle_make) {
        //     mandatoryFields.push('Vehicle Company');
        // }
        // if (!partial.vehicle_year) {
        //     mandatoryFields.push('Vehicle Year');
        // }
        
        // if (!partial.vehicle_color) {
        //     mandatoryFields.push('Vehicle Color');
        // }
         if (!partial.user_name) {
            mandatoryFields.push('User Name');
        }
        if (!partial.email) {
            mandatoryFields.push('Email-Id');
        }
         if (!partial.password) {
            mandatoryFields.push('Password');
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
  this.loader = this.loadingCtrl.create({content: "Please wait..."});
        this.loader.present();


		this.data.inspection_description=this.navParams.get('inspection_description'); 
		this.data.self_inspection=this.navParams.get('self_inspection');
		this.data.registration_expiration=this.navParams.get('registration_expiration'); 
		this.data.license_sticker=this.navParams.get('license_sticker');
		this.data.brake_lights=this.navParams.get('brake_lights');
		this.data.head_lights=this.navParams.get('head_lights'); 
		this.data.front_signal=this.navParams.get('front_signal');
		this.data.rear_signal=this.navParams.get('rear_signal');
		this.data.tinted_windows=this.navParams.get('tinted_windows');
		this.data.crack_windows=this.navParams.get('crack_windows');


				var link = 'http://18.221.76.63/ngao/webservicesign_up';
		        var data = JSON.stringify({
							first_name: localStorage['first_name'],
							last_name:localStorage['last_name'],
							ethnicity:localStorage['ethnicity'],
							gender:localStorage['gender'],
							age:localStorage['age'],
							mental_illness:localStorage['hmistatus'],
							address:localStorage['address'],
							sexual_orientation:localStorage['sexual_orientation'],
							vehicle_model:this.vehicle_model,
							vehicle_make:this.vehicle_make,
							vehicle_year:this.vehicle_year,
							vehicle_color:this.vehicle_color,
							user_name:this.user_name,
							email:this.email,
							password:this.password,
							about_you:this.about_you,
							inspection_description:this.data.inspection_description,
							self_inspection:this.data.self_inspection,
							registration_expiration:this.data.registration_expiration,
							license_sticker:this.data.license_sticker,
							brake_lights:this.data.brake_lights,
							head_lights:this.data.head_lights,
							front_signal:this.data.front_signal,
							rear_signal:this.data.rear_signal,
							tinted_windows:this.data.tinted_windows,
							crack_windows:this.data.crack_windows
			});
				 this.http.post(link, data)
        .subscribe(data => {
          // loader.dismiss();
         this.data.response = data._body;
         console.log(data);
         console.log(data._body);
          console.log(data._body.message);
           console.log(data._body.message);
           if(JSON.parse(data._body).response==true){
              this.submittt(JSON.parse(data._body).user_id);
            }
              else if(JSON.parse(data._body).response==false){
              error=JSON.parse(data._body).message;
              let alert = this.alertCtrl.create({title: 'Error!',subTitle: error,buttons: ['OK']});
              alert.present();
              this.loader.dismiss();

            }
				         

		}, error => {
			console.log("Oooops!");
		});

  }
    submittt(id:number){
      // alert(id)
      if(this.pic=='img/logo.png')
      {
        // alert('hi')
         this.pic=null
         FileTransfer = new Transfer();
          var options: any;
          options = {
            fileKey: "self_inspection",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
          FileTransfer.upload(this.pic, "http://18.221.76.63/ngao/webserviceself_inspection_pic/" + id ,options)
           .then(data => {
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Registration Successful please check your email to verify your email address',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.push(LoginPage)
           }, (err) => {
             // alert(JSON.stringify(err))
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Registration Successful please check your email to verify your email address',
               buttons: ['OK']
             });
             alert.present();
              this.navCtrl.push(LoginPage)
           })
      }
      else{
         // alert('bi')

        FileTransfer = new Transfer();
          var options: any;
          options = {
            fileKey: "self_inspection",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
          FileTransfer.upload(this.pic, "http://18.221.76.63/ngao/webserviceself_inspection_pic/" + id ,options)
           .then(data => {
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Registration Successful please check your email to verify your email address',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.push(LoginPage)
           }, (err) => {
             // alert(JSON.stringify(err))
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Registration Successful please check your email to verify your email address',
               buttons: ['OK']
             });
             alert.present();
              this.navCtrl.push(LoginPage)
           })
       // alert(id);
      }
          
      }



}
