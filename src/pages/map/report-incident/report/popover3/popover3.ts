import { Component } from '@angular/core';
import { NavController , NavParams,ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { Brightness } from 'ionic-native';
import { ShowpicPage } from './showpic/showpic';
/*
  Generated class for the Popover3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover3',
  templateUrl: 'popover3.html'
})
export class Popover3Page {
 public baseimage:string;
   public base64Image: string;
     isRound: boolean = true;
  isOutline: boolean = false;
    myColor2: string = 'dark';

  constructor(public navCtrl: NavController,public navParams: NavParams,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Popover3Page Page');
  }
  a = 0;
  show1(){
   
   let aa=0.1;
   let bb=0.6;
   let cc=1.0;
    if(this.a==0) {
      this.a= this.a + 1;
      Brightness.setBrightness(aa);
      console.log(aa);
    }
    else if(this.a==1) {
      this.a= this.a + 1;
      Brightness.setBrightness(bb);
      console.log(bb);
    }
    else if(this.a==2) {
        this.a= 0;
      Brightness.setBrightness(cc);
      console.log(cc);
    }
  }
  show()
  {
	  	let options = {
		    maximumImagesCount: 1,
		    width: 500,
		    height: 500,
		    quality: 75
		  }

		  ImagePicker.getPictures(options).then( (file_uris) => { this.baseimage =file_uris} );
		
		
  }
  take()
  {
  	Camera.getPicture({
  		destinationType: Camera.DestinationType.DATA_URL,
  		targetHeight:1000,targetWidth:1000
  	}).then((imageData) => {
  		this.base64Image = "data:image/jpeg;base64," + imageData;
  	}, (err) => {
  		console.log(err);
  	});

  }
  close()
  {
this.viewCtrl.dismiss();
  }

}
