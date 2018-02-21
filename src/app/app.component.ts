import { Component ,ViewChild } from '@angular/core';
import { Platform ,AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{KeitareportPage}from'../pages/keitareport'
import{ReportIncidentPage}from'../pages/map/report-incident/report-incident';
import { Nav} from 'ionic-angular';
import{TermsandconditionsPage}from'../pages/termsandconditions/termsandconditions'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
  rootPage = WelcomePage;
  count=0
     // rootPage = ReportIncidentPage;
     // rootPage = KeitareportPage;
     // rootPage=ReportIncidentPage;
  constructor(platform: Platform,public alertCtrl:AlertController) {
    platform.ready().then(() => {
        if(localStorage['pk']==null)
      {
         this.nav.setRoot(WelcomePage);
      }
      else
      {
         this.nav.setRoot(TabsPage);
      }

         platform.registerBackButtonAction(()=>{
             this.count++
           if(this.nav.canGoBack()){
             this.nav.pop()
           }
           else{

             let alert=this.alertCtrl.create({
                title: 'Exit?',
        message: 'Do you want to exit the app?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            alert=null
            }
          },
          {
            text: 'Exit',
            handler: () => {

              platform.exitApp();
            }
          }
        ]
             })
             alert.present()

           }
         })

         





      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
