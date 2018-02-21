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
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { WebserviceUrl } from '../../../providers/webservice-url';
/*
  Generated class for the ForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, formBuilder, web) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.web = web;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.slideOneForm = formBuilder.group({
            // Name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            Email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(emailRegex), Validators.required])]
        });
        this.data = {};
        // this.useremail = '';
        // this.userpass = '';
        // this.data.response = '';
        this.http = http;
        // this.signupage = SignUpPage;
        console.log('Hello  Page');
    }
    ForgotPasswordPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(LoginPage, {
            item: item
        });
    };
    ForgotPasswordPage.prototype.submit = function () {
        var _this = this;
        if (!this.slideOneForm.valid || !this.slideOneForm.dirty) {
            var partial = {
                email: this.slideOneForm.controls["Email"].value
            };
            var mandatoryFields = [];
            if (!partial.email) {
                mandatoryFields.push('Email-Id');
            }
            if (mandatoryFields.length > 0) {
                this.alertCtrl
                    .create({ title: 'Mandatory Field', message: mandatoryFields.join(', '), buttons: ['ok'] })
                    .present();
                return;
            }
        }
        else {
            // let name = this.slideOneForm.controls["Name"].value
            var email = this.slideOneForm.controls["Email"].value;
            // let password = this.slideOneForm.controls["Password"].value
            // let phone = this.slideOneForm.controls["Phonenumber"].value
            console.log(name + " " + email);
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait...",
            });
            loader_1.present();
            var link = this.web.webservice + 'webserviceforgot_password';
            var data = JSON.stringify({
                email: email
            });
            this.http.post(link, data)
                .subscribe(function (data) {
                loader_1.dismiss();
                _this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                console.log(JSON.parse(data._body).response);
                if (JSON.parse(data._body).response == false || JSON.parse(data._body).response == 'false') {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please Enter  Your Register Email Id!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Your Password has been send on your register mail Id please check your mail!',
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
                loader_1.dismiss();
                console.log("Oooops!");
            });
        }
    };
    ForgotPasswordPage = __decorate([
        Component({
            selector: 'page-forgot-password',
            templateUrl: 'forgot-password.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Http, LoadingController, AlertController, FormBuilder, WebserviceUrl])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());
//# sourceMappingURL=forgot-password.js.map