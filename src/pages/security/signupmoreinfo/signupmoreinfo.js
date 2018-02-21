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
import { NavController, NavParams } from 'ionic-angular';
import { SignupnextPage } from '../signupnext/signupnext';
/*
  Generated class for the Signupmoreinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SignupmoreinfoPage = (function () {
    function SignupmoreinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data.inspection_description = '';
        this.data.self_inspection = '';
        this.data.registration_expiration = '';
        this.data.license_sticker = '';
        this.data.brake_lights = '';
        this.data.head_lights = '';
        this.data.front_signal = '';
        this.data.rear_signal = '';
        this.data.tinted_windows = '';
        this.data.crack_windows = '';
    }
    SignupmoreinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupmoreinfoPage');
    };
    SignupmoreinfoPage.prototype.submit = function () {
        this.navCtrl.push(SignupnextPage, {
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
    };
    SignupmoreinfoPage = __decorate([
        Component({
            selector: 'page-signupmoreinfo',
            templateUrl: 'signupmoreinfo.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], SignupmoreinfoPage);
    return SignupmoreinfoPage;
}());
//# sourceMappingURL=signupmoreinfo.js.map