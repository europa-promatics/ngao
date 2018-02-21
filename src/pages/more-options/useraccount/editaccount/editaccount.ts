import { Component } from '@angular/core';
import { NavController ,AlertController , ActionSheetController, ToastController, Platform, LoadingController, Loading} from 'ionic-angular';
import  { UseraccountPage }from'../useraccount';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../../providers/webservice-url';
import {PopoverController} from 'ionic-angular';
import { File,ImagePicker,Transfer,Camera } from 'ionic-native';
declare var cordova: any;
declare var FileTransfer;
/*
/*
  Generated class for the Editaccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html'
})
export class EditaccountPage {
   public base64Image: string;
http;
   data;
   name;
   aboutu;
   age;
   address;
pk;
  loader;
public pic:string;
  lastImage: string = null;
  loading: Loading;




  constructor( public navCtrl: NavController,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,http: Http,public web:WebserviceUrl) {
      this.data={};
        this.name='';
        this.aboutu='';
        this.age='';
        this.address='';
     this.data.response='';
     this.http = http;
   console.log('Hello registration Page');
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
 }
 

  ionViewDidLoad() {
    console.log('Hello EditaccountPage Page');
  }
submit()
{
  var id=localStorage['pk'];
  console.log(id);
    this.loader = this.loadingCtrl.create({content: "Please wait..."});
        this.loader.present();
	 var error;
  var link = this.web.webservice+'webserviceedit_profile';
        var data = JSON.stringify({
         user_id: localStorage['pk'],
         // id:localStorage['pk'],
        first_name:this.name,
           about_you:this.aboutu,
            age:this.age,
            address:this.address,

         });
         this.http.post(link, data)
         .subscribe(data => {
              // loader.dismiss();
          this.data.response =data._body;
           
           console.log('hy'+data);
            console.log(data._body);
            if(JSON.parse(data._body).response==true){
          FileTransfer = new Transfer();
          var options: any;
          options = {
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
          }
           var url = this.web.webservice+'webserviceprofile_pic/';
          FileTransfer.upload(this.pic,url+ id ,options)
           .then(data => {
             this.loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Your profile is submit',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.push(UseraccountPage)
           }, (err) => {
             alert(JSON.stringify(err))
             this.loader.dismiss();
           })
         }
          else if(JSON.parse(data._body).response==false){
              error=JSON.parse(data._body).message;
              let alert = this.alertCtrl.create({title: 'Error!',subTitle: error,buttons: ['OK']});
              alert.present();
              this.loader.dismiss();
            }
             
       
          
         }, error => {
             console.log(error);
               // loader.dismiss();
               });
}


  
}

