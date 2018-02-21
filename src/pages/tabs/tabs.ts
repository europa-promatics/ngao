import { Component } from '@angular/core';

// import { DashboardPage } from '../dashboard/dashboard';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {DrivingModePage } from '../map/driving-mode/driving-mode';
import { FindRoutePage } from '../map/find-route/find-route';
import { ReportIncidentPage } from '../map/report-incident/report-incident';
import { MoreNavigationPage } from '../more-navigation/more-navigation';
import { PopoverController} from 'ionic-angular';
import{Page5Page}from'../DASHBOARD/page5';
import { PopoverPage } from '../more-options/popover';
import{RecordmyroutePage}from'../recordmyroute/recordmyroute';
import{Mytrack3Page}from'../more-options/mytrack3/mytrack3';
import{SpeedtrackPage}from'../speedtrack/speedtrack';
import{Mind786Page}from'../mind786/mind786';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = DashboardPage;
 tab1Root: any = Page5Page;
  tab2Root: any = FindRoutePage;
  // tab3Root: any = DrivingModePage;
  tab4Root: any=ReportIncidentPage;
  // tab5Root: any=RecordmyroutePage;
  // tab6Root:any=Mytrack3Page;
  tab7Root:any=SpeedtrackPage;
  tab8Root:any=Mind786Page;
  
  constructor(public popoverCtrl: PopoverController) {

  }
   presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    //let ev = {target : {getBoundingClientRect : () => {return { top:'900' , bottom: '0' };}}}
    popover.present({});
  }
}
