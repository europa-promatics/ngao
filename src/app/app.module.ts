// import { NgModule } from '@angular/core';
// import { IonicApp, IonicModule } from 'ionic-angular';
// import { MyApp } from './app.component';
// // import { HomePage } from '../pages/home/home';
// // import {Facebook} from 'ionic-native';
// // import{ResultPage}from'../pages/result/result';
// // import{SecondpagePage}from '../pages/secondpage/secondpage';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
// import { WelcomePage } from '../pages/welcome/welcome';
// import { LoginPage } from '../pages/security/login/login';
// import { ForgotPasswordPage } from '../pages/security/forgot-password/forgot-password';
// import { SignUpPage } from '../pages/security/sign-up/sign-up';
// import { SignupnextPage } from '../pages/security/signupnext/signupnext';
// import {SignupmoreinfoPage } from '../pages/security/signupmoreinfo/signupmoreinfo';
// import { DashboardPage } from '../pages/dashboard/dashboard';
// import {DrivingModePage } from '../pages/map/driving-mode/driving-mode';
// import { FindRoutePage } from '../pages/map/find-route/find-route';
// import { ReportIncidentPage } from '../pages/map/report-incident/report-incident';
// import { MoreNavigationPage } from '../pages/more-navigation/more-navigation';
// import { TabsPage } from '../pages/tabs/tabs';
// import { LocationTracker } from '../providers/location-tracker';
// import{ReportPage}from '../pages/map/report-incident/report/report';
// import{ListagentPage}from'../pages/popover/listagent/listagent';
// import{PopoverPage}from'../pages/popover/popover';
// import{PopoverrPage}from'../pages/popover/listagent/popoverr/popoverr';
// import{DashboardpopupPage}from'../pages/dashboard/dashboardpopup/dashboardpopup';
// import{Popover3Page}from'../pages/map/report-incident/report/popover3/popover3';
// import{ShowpicPage}from'../pages/map/report-incident/report/popover3/showpic/showpic';
// import{SelfinspectionPage}from '../pages/security/signupnext/selfinspection/selfinspection';
// import{SettingPage}from'../pages/dashboard/setting/setting';
// import{ UseraccountPage}from'../pages/popover/useraccount/useraccount';
// import{EditProfilePage}from'../pages/popover/useraccount/edit-profile/edit-profile';
// import{PageGmapAutocomplete}from'../pages/page-gmap-autocomplete/page-gmap-autocomplete';
// import{ModalAutocompleteItems}from'../pages/modal-autocomplete-items/modal-autocomplete-items';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/security/login/login';
import { ForgotPasswordPage } from '../pages/security/forgot-password/forgot-password';
import { SignUpPage } from '../pages/security/sign-up/sign-up';
import { SignupnextPage } from '../pages/security/signupnext/signupnext';
import {SignupmoreinfoPage } from '../pages/security/signupmoreinfo/signupmoreinfo';
// import { DashboardPage } from '../pages/dashboard/dashboard';
import {DrivingModePage } from '../pages/map/driving-mode/driving-mode';
import { FindRoutePage } from '../pages/map/find-route/find-route';
import { ReportIncidentPage } from '../pages/map/report-incident/report-incident';
import { MoreNavigationPage } from '../pages/more-navigation/more-navigation';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationTracker } from '../providers/location-tracker';
import{ReportPage}from '../pages/map/report-incident/report/report';
import{ListAgentPage}from'../pages/more-options/list-agent/list-agent';
import{PopoverPage}from'../pages/more-options/popover';
// import{PopoverrPage}from'../pages/more-options/list-agent/popoverr/popoverr';
// import{DashboardpopupPage}from'../pages/dashboard/dashboardpopup/dashboardpopup';
import{DashboardpopupPage}from'../pages/map/report-incident/dashboardpopup/dashboardpopup';
import{Popover3Page}from'../pages/map/report-incident/report/popover3/popover3';
import{ShowpicPage}from'../pages/map/report-incident/report/popover3/showpic/showpic';
import{SettingPage}from'../pages/DASHBOARD/setting/setting';
// import{ListAgentPage}from'../pages/list-agent/list-agent';
// import{ListAgentDetailsPage}from'../pages/list-agent/list-agent-details/list-agent-details';
import { UseraccountPage }from'../pages/more-options/useraccount/useraccount';
import { WebserviceUrl } from '../providers/webservice-url';
import{EditaccountPage}from'../pages/more-options/useraccount/editaccount/editaccount';
import {SpeedPage}from'../pages/map/driving-mode/speed/speed';
import{Page5Page}from'../pages/DASHBOARD/page5';
import{SearchbarPage}from'../pages/searchbar/searchbar';
import {ListroutePage }from'../pages/map/find-route/listroute/listroute';
import {CurrentroutePage }from'../pages/map/find-route/listroute/currentroute/currentroute';
import {ViewtutorialPage}from'../pages/more-options/viewtutorial/viewtutorial';
import{RoutenamePage}from'../pages/map/find-route/routename/routename';
import{ListAgentDetailsPage }from'../pages/more-options/list-agent/list-agent-details/list-agent-details';
import{ IncidentdetailsPage}from'../pages/map/report-incident/incidentdetails/incidentdetails';
import{UserIncidentDetailPage}from'../pages/map/report-incident/incidentdetails/user-incident-detail/user-incident-detail';
import{AgentsOnMapPage}from'../pages/more-options/list-agent/agents-on-map/agents-on-map';
import {AgentDetailPage}from'../pages/more-options/list-agent/agents-on-map/agent-detail/agent-detail';
import{SketchroutePage}from'../pages/more-options/sketchroute/sketchroute';
import{RecordPage}from'../pages/more-options/sketchroute/record/record';
import{Record2Page }from'../pages/more-options/record2/record2';
import{Mytrack3Page}from'../pages/more-options/mytrack3/mytrack3';
import{Mytrack4Page}from'../pages/more-options/mytrack4/mytrack4';
import{RecordmyroutePage }from'../pages/recordmyroute/recordmyroute';
import{AddtofavPage}from'../pages/recordmyroute/addtofav/addtofav';
import{FavlistPage}from'../pages/recordmyroute/favlist/favlist';
import{TrackcurrentPage}from'../pages/recordmyroute/favlist/trackcurrent/trackcurrent';
// import{KeitareportPage}from'../pages/keitareport/keitareport';
import {InfoincidentPage}from'../pages/infoincident/infoincident';
import{SmileRateComponent}from'../components/smile-rate/smile-rate';
import{FlashCardComponent}from'../components/flash-card/flash-card';
import{ExpandableHeaderComponent}from'../components/expandable-header/expandable-header';
import{DirectroutePage}from'../pages/directroute/directroute';
import{NextincidentpinsPage}from'../pages/nextincidentpins/nextincidentpins';
import{ListroutefavPage}from'../pages/listroutefav/listroutefav'
import{AnalyzetrackPage}from'../pages/analyzetrack/analyzetrack'
import{SpeedtrackPage}from'../pages/speedtrack/speedtrack';
import{Mind786Page}from'../pages/mind786/mind786';
import{TermsandconditionsPage}from'../pages/termsandconditions/termsandconditions'
// import{AdMobFree}from'@ionic-native/admob-free'

@NgModule({
  declarations: [
    MyApp,
    //  AboutPage,
    // ContactPage,
    // HomePage,
    // WelcomePage,
    // LoginPage,
    // ForgotPasswordPage,
    // SignUpPage,
    // SignupnextPage,
    // SignupmoreinfoPage,
    // DashboardPage,
    // DrivingModePage,
    // FindRoutePage,
    // ReportIncidentPage,
    // MoreNavigationPage,
    // TabsPage,
    // ContactPage,
    // ReportPage,
    // ListagentPage,
    // PopoverPage,
    // PopoverrPage,
    // DashboardpopupPage,
    // Popover3Page,
    // ShowpicPage,
    // SelfinspectionPage,
    // SettingPage,
    //  UseraccountPage,
    //  EditProfilePage,
    //  PageGmapAutocomplete,
    //  ModalAutocompleteItems
     // AboutPage,
    ContactPage,
    // HomePage,
    WelcomePage,
    LoginPage,
    ForgotPasswordPage,
    SignUpPage,
    SignupnextPage,
    SignupmoreinfoPage,
    // DashboardPage,
    DrivingModePage,
    FindRoutePage,
    ReportIncidentPage,
    MoreNavigationPage,
    TabsPage,
    ContactPage,
    ReportPage,
  ListAgentPage,
    PopoverPage,
    // PopoverrPage,
    DashboardpopupPage,
    Popover3Page,
    ShowpicPage,
    SettingPage,
    ListAgentDetailsPage,
    ListAgentPage,
    UseraccountPage,
    EditaccountPage,
    SpeedPage,
    Page5Page,
    SearchbarPage,
    ListroutePage,
    CurrentroutePage ,
    ViewtutorialPage,
    RoutenamePage,
    ListAgentDetailsPage,
    IncidentdetailsPage,
    UserIncidentDetailPage,
    AgentsOnMapPage,
    AgentDetailPage,
    SketchroutePage,
    RecordPage,
    Record2Page,
    Mytrack3Page,
    Mytrack4Page,
    RecordmyroutePage,
    AddtofavPage,
    FavlistPage,
    TrackcurrentPage,
    // KeitareportPage,
    InfoincidentPage,
    SmileRateComponent,
    FlashCardComponent,
    ExpandableHeaderComponent,
    DirectroutePage,
    NextincidentpinsPage,
    ListroutefavPage,
    AnalyzetrackPage,
    SpeedtrackPage,
    Mind786Page,
    TermsandconditionsPage
  ],
  imports: [

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   //  MyApp,
   // AboutPage,
   //  ContactPage,
   //  HomePage,
   //  WelcomePage,
   //  LoginPage,
   //  ForgotPasswordPage,
   //  SignUpPage,
   //  SignupnextPage,
   //  SignupmoreinfoPage,
   //  DashboardPage,
   //  DrivingModePage,
   //  FindRoutePage,
   //  ReportIncidentPage,
   //  MoreNavigationPage,
   //  TabsPage,
   //  ContactPage,
   //  ReportPage,
   //  ListagentPage,
   //  PopoverPage,
   //  PopoverrPage,
   //  DashboardpopupPage,
   //  Popover3Page,
   //  ShowpicPage,
   //  SelfinspectionPage,
   //   SettingPage,
   //    UseraccountPage,
   //    EditProfilePage,
   //    PageGmapAutocomplete,
   //    ModalAutocompleteItems
    MyApp,
    // AboutPage,
    ContactPage,
    // HomePage,
    WelcomePage,
    LoginPage,
    ForgotPasswordPage,
    SignUpPage,
    SignupnextPage,
    SignupmoreinfoPage,
    // DashboardPage,
    DrivingModePage,
    FindRoutePage,
    ReportIncidentPage,
    MoreNavigationPage,
    TabsPage,
    ContactPage,
    ReportPage,
    ListAgentPage,
    PopoverPage,
    // PopoverrPage,
    DashboardpopupPage,
    Popover3Page,
    ShowpicPage,
    SettingPage,
    ListAgentDetailsPage,
    ListAgentPage,
    UseraccountPage,
    EditaccountPage,
    SpeedPage,
     Page5Page,
    SearchbarPage,
    ListroutePage,
    CurrentroutePage ,
    ViewtutorialPage,
    RoutenamePage,
    ListAgentDetailsPage,
    IncidentdetailsPage,
    UserIncidentDetailPage,
    AgentsOnMapPage,
    AgentDetailPage,
    SketchroutePage,
    RecordPage,
    Record2Page,
    Mytrack3Page,
    Mytrack4Page,
    RecordmyroutePage,
    AddtofavPage,
    FavlistPage,
    TrackcurrentPage,
    // KeitareportPage,
    InfoincidentPage,
    DirectroutePage,
    NextincidentpinsPage,
    ListroutefavPage,
    AnalyzetrackPage,
    SpeedtrackPage,
    Mind786Page,
    TermsandconditionsPage
   
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},LocationTracker,WebserviceUrl]
})
export class AppModule {}
