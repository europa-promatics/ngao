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
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignUpPage } from '../sign-up/sign-up';
import { DashboardPage } from '../../dashboard/dashboard';
import { ContactPage } from '../../contact/contact';
import { WebserviceUrl } from '../../../providers/webservice-url';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, web) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.web = web;
        this.Contact = ContactPage;
        this.forgotPage = ForgotPasswordPage;
        this.signupage = SignUpPage;
        this.data = {};
        this.useremail = '';
        this.userpass = '';
        this.data.response = '';
        this.http = http;
        // this.webb=web;
    }
    LoginPage.prototype.ngOnInit = function () {
        console.log(this.web.webservice);
    };
    LoginPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(LoginPage, {
            item: item
        });
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        var partial = {
            email: this.useremail,
            password: this.userpass,
        };
        var mandatoryFields = [];
        if (!partial.email) {
            mandatoryFields.push('Email-Id');
        }
        if (!partial.password) {
            mandatoryFields.push('Password');
        }
        if (mandatoryFields.length > 0) {
            this.alertCtrl
                .create({ title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok'] })
                .present();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        var link = this.web.webservice + 'webservicelogin';
        var data = JSON.stringify({ email: this.useremail, password: this.userpass });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data.response = data._body;
            console.log(data);
            console.log(data._body);
            console.log(JSON.parse(data._body).response);
            if (JSON.parse(data._body).response == false || JSON.parse(data._body).response == 'false') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Please enter correct details!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'You have login successfully  .!',
                    buttons: [{
                            text: 'Ok',
                            handler: function (data) {
                                _this.navCtrl.push(DashboardPage);
                                console.log('Ok clicked');
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (error) {
            loader.dismiss();
            console.log("Oooops!");
        });
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Http, LoadingController, AlertController, WebserviceUrl])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map