import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { GalleryPage } from '../gallery/gallery';
import { ImagePicker } from 'ionic-native';
import { Brightness } from 'ionic-native';
/*
  Generated class for the ClickPic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-click-pic',
  templateUrl: 'click-pic.html'
})
export class ClickPicPage {
 public baseimage:string;

  
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
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
		    maximumImagesCount: 4,
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

}
