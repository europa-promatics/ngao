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
import { SignupnextPage } from '../signupnext/signupnext';
export var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.first_name = '';
        this.last_name = '';
        this.ethnicity = '';
        this.gender = '';
        this.age = '';
        this.sexual_orientation = '';
        this.first_name = '';
        this.last_name = '';
        this.ethnicity = '';
        this.gender = '';
        this.age = '';
        this.sexual_orientation = '';
        this.hmistatus = '';
        this.address = '';
    }
    SignUpPage.prototype.submit = function () {
        localStorage['first_name'] = this.first_name;
        localStorage['last_name'] = this.last_name;
        localStorage['age'] = this.age;
        localStorage['ethnicity'] = this.ethnicity;
        localStorage['gender'] = this.gender;
        localStorage['sexual_orientation'] = this.sexual_orientation;
        localStorage['hmistatus'] = this.hmistatus;
        localStorage['address'] = this.address;
        this.navCtrl.push(SignupnextPage);
    };
    SignUpPage = __decorate([
        Component({
            selector: 'page-sign-up',
            templateUrl: 'sign-up.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, LoadingController, AlertController])
    ], SignUpPage);
    return SignUpPage;
}());
//# sourceMappingURL=sign-up.js.map