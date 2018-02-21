var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SignupmoreinfoPage } from '../signupmoreinfo/signupmoreinfo';
import { LoginPage } from '../login/login';
/*
  Generated class for the Signupnext page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SignupnextPage = (function () {
    function SignupnextPage(navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.moreinfo = SignupmoreinfoPage;
        this.data = {};
        // this.first_name=this.navParams.get('first_name');
        // this.last_name=this.navParams.get('last_name');
        // this.ethnicity=this.navParams.get('ethnicity');
        // this.gender=this.navParams.get('gender');
        // this.age=this.navParams.get('age');
        // this.sexual_orientation=this.navParams.get('sexual_orientation');
        // this.hmistatus=this.navParams.get('hmistatus');
        // this.address=this.navParams.get('address');
        this.vehicle_model = '';
        this.vehicle_make = '';
        this.vehicle_year = '';
        this.vehicle_color = '';
        this.user_name = '';
        this.email = '';
        this.password = '';
        this.about_you = '';
        this.data.response = '';
        this.http = http;
    }
    SignupnextPage.prototype.submitt = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        //   localStorage['first_name']=this.first_name;
        // localStorage['last_name']=this.last_name;
        // localStorage['age']=this.age;
        // localStorage['ethnicity']=this.ethnicity;
        // localStorage['gender']=this.gender;
        // localStorage['sexual_orientation']=this.sexual_orientation;
        // localStorage['hmistatus']=this.hmistatus;
        // localStorage['address']=this.address;
        // this.first_name=this.navParams.get('first_name');
        // this.last_name=this.navParams.get('last_name');
        // this.ethnicity=this.navParams.get('ethnicity');
        // this.gender=this.navParams.get('gender');
        // this.age=this.navParams.get('age');
        // this.sexual_orientation=this.navParams.get('sexual_orientation');
        // this.hmistatus=this.navParams.get('hmistatus');
        // this.address=this.navParams.get('address');
        this.data.inspection_description = this.navParams.get('inspection_description');
        this.data.self_inspection = this.navParams.get('self_inspection');
        this.data.registration_expiration = this.navParams.get('registration_expiration');
        this.data.license_sticker = this.navParams.get('license_sticker');
        this.data.brake_lights = this.navParams.get('brake_lights');
        this.data.head_lights = this.navParams.get('head_lights');
        this.data.front_signal = this.navParams.get('front_signal');
        this.data.rear_signal = this.navParams.get('rear_signal');
        this.data.tinted_windows = this.navParams.get('tinted_windows');
        this.data.crack_windows = this.navParams.get('crack_windows');
        var link = 'http://europa.promaticstechnologies.com/ngao/webservicesign_up';
        var data = JSON.stringify({
            first_name: localStorage['first_name'],
            last_name: localStorage['last_name'],
            ethnicity: localStorage['ethnicity'],
            gender: localStorage['gender'],
            age: localStorage['age'],
            mental_illness: localStorage['hmistatus'],
            address: localStorage['address'],
            sexual_orientation: localStorage['sexual_orientation'],
            vehicle_model: this.vehicle_model,
            vehicle_make: this.vehicle_make,
            vehicle_year: this.vehicle_year,
            vehicle_color: this.vehicle_color,
            user_name: this.user_name,
            email: this.email,
            password: this.password,
            about_you: this.about_you,
            inspection_description: this.data.inspection_description,
            self_inspection: this.data.self_inspection,
            registration_expiration: this.data.registration_expiration,
            license_sticker: this.data.license_sticker,
            brake_lights: this.data.brake_lights,
            head_lights: this.data.head_lights,
            front_signal: this.data.front_signal,
            rear_signal: this.data.rear_signal,
            tinted_windows: this.data.tinted_windows,
            crack_windows: this.data.crack_windows
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data.response = data._body;
            console.log(data);
            console.log(data._body);
            console.log(data._body.message);
            // console.log(data);
            // console.log(data);
            // console.log(JSON.parse(data));
            if (JSON.parse(data._body).response == false || JSON.parse(data._body).response == 'false') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'This Email address or contact_no or user_name is already registered with us.!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'registration complete!',
                    buttons: [{
                            text: 'Ok',
                            handler: function (data) {
                                _this.navCtrl.push(LoginPage);
                                console.log('Ok clicked');
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    SignupnextPage = __decorate([
        Component({
            selector: 'page-signupnext',
            templateUrl: 'signupnext.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Http, LoadingController, AlertController])
    ], SignupnextPage);
    return SignupnextPage;
}());
//# sourceMappingURL=signupnext.js.map