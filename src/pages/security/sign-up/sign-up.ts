import { Component } from '@angular/core';
import { NavController ,NavParams,AlertController,LoadingController} from 'ionic-angular';
import{SignupnextPage}from'../signupnext/signupnext';


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
		first_name = '';
		last_name = '';
		ethnicity ='';
		gender='';
		age='';
		sexual_orientation ='';
		hmistatus;
		address;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  	 this.first_name = '';
     this.last_name = '';
     this.ethnicity ='';
     this.gender='';
     this.age='';
     this.sexual_orientation ='';
     this.hmistatus='';
	 this.address='';
  }
 submit()
 {  
   let partial = {
           first_name:this.first_name,
            last_name:this.last_name,
            age:this.age,
            ethnicity:this.ethnicity,
            sexual_orientation:this.sexual_orientation,       
    };
    let mandatoryFields: string[] = [];
    
      if (!partial.first_name) {
            mandatoryFields.push('First Name');
        }
        if (!partial.last_name) {
            mandatoryFields.push('Last Name');
        }
        if (!partial.age) {
            mandatoryFields.push('Age');
        }
        
        if (!partial.ethnicity) {
            mandatoryFields.push('Ethnicity');
        }
        //  if (!partial.sexual_orientation) {
        //     mandatoryFields.push('Sexual Orientation');
        // }
        // if (!partial.type) {
        //     mandatoryFields.push('Type of Incident');
        // }
        if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
                .present();
            return;
        }
 	localStorage['first_name']=this.first_name;
 	localStorage['last_name']=this.last_name;
 	localStorage['age']=this.age;
 	localStorage['ethnicity']=this.ethnicity;
 	localStorage['gender']=this.gender;
 	localStorage['sexual_orientation']=this.sexual_orientation;
 	localStorage['hmistatus']=this.hmistatus;
 	localStorage['address']=this.address;
    this.navCtrl.push(SignupnextPage)

  }

}
