

import {Component} from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import {LoginPage} from '../login/login';
import {SignUpPage} from '../sign-up/sign-up';
import { WebserviceUrl } from '../../../providers/webservice-url';

/*
  Generated class for the ForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
    // forgotPage;
    data;
    http;
    // useremail;
    // userpass;
    // signupage;
    slideOneForm: FormGroup;
email;

    constructor(public navCtrl: NavController, public navParams: NavParams, http: Http,
        public loadingCtrl: LoadingController, public alertCtrl: AlertController,public formBuilder: FormBuilder,public web:WebserviceUrl) {
    //     var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    //     this.slideOneForm = formBuilder.group({
    //     // Name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //     Email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(emailRegex), Validators.required])]
    //     // Password: ['',Validators.compose([Validators.pattern('[a-z0-9]*'), Validators.required])],
    // //     // RePassword: ['',Validators.compose([Validators.pattern('[a-z0-9]*'), Validators.required])],
    // //     // Phonenumber: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
    // });
       this.email='';
        this.data = {};
        // this.useremail = '';
        // this.userpass = '';
        // this.data.response = '';
        this.http = http;
        // this.signupage = SignUpPage;
        console.log('Hello  Page');
    }
    itemTapped(event, item) {
        this.navCtrl.push(LoginPage, {
            item: item
        });
    }
    submitt()
{
    this.navCtrl.push(SignUpPage);
}
    submit() {
   //     if(!this.slideOneForm.valid || !this.slideOneForm.dirty)
   // {
     
   
   //     let partial = {
   //         email: this.slideOneForm.controls["Email"].value
           
   //  };
   //  let mandatoryFields: string[] = [];
   //    if (!partial.email) {
   //          mandatoryFields.push('Email-Id');
   //      }
   //    if (mandatoryFields.length > 0) {
   //          this.alertCtrl
   //              .create({title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok']})
   //              .present();
   //          return;
   //      }
   //    }
   // else{
     // let name = this.slideOneForm.controls["Name"].value
     // let email = this.slideOneForm.controls["Email"].value
     // let password = this.slideOneForm.controls["Password"].value
     // let phone = this.slideOneForm.controls["Phonenumber"].value
     // console.log(name + " " + email);




     let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        var link = this.web.webservice+'webserviceforgot_password';
        var data = JSON.stringify({
            email: this.email
        });

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                console.log(JSON.parse(data._body).response);

                if (JSON.parse(data._body).response == false || JSON.parse(data._body).response == 'false') {
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please Enter  Your Register Email Id!',
                        buttons: ['OK']
                    });
                    alert.present();
                } else {
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Your Password has been send on your register mail Id please check your mail!',
                        buttons: [{
                            text: 'Ok',
                            handler: data => {
                                this.navCtrl.push(LoginPage);
                                console.log('Ok clicked');
                            }
                        }]
                    });
                    alert.present();
                }


            }, error => {
                loader.dismiss();
                console.log("Oooops!");
            });




   }



    
    }



