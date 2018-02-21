import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import{ListAgentDetailsPage}from'./list-agent-details/list-agent-details';
import {Http} from '@angular/http';
import { WebserviceUrl } from '../../../providers/webservice-url';
import {AgentsOnMapPage}from'./agents-on-map/agents-on-map';


/*
  Generated class for the ListAgent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-agent',
  templateUrl: 'list-agent.html'
})
export class ListAgentPage {
    data;
    http;
    bubu;
    // agent_details;
    loading;
private  searchQuery: string = '';
 private items: string[];

 // private agent_details:any;
agent_details:any;
agent_detail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, http: Http,
        public loadingCtrl: LoadingController, public alertCtrl: AlertController,public web:WebserviceUrl) {
      this.http = http;

      
  }
  AgentsOnMap()
  {
this.navCtrl.push(AgentsOnMapPage);
  }
   initializeItems() {
   
    this.agent_details=this.agent_details;

  }
  getItems(ev:any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.agent_details = this.agent_details.filter((value) => {
        return (value.name.toUpperCase().indexOf(val.toUpperCase()) > -1);
      })
    }
    else
    {
      this.agent_details=this.agent_detail;
    }


  }

  // ngOnInit() {
     ionViewDidEnter(){
     let loader = this.loadingCtrl.create({
            content: "Please wait...",
             duration: 1000
        });
        loader.present();
    
    console.log('ionViewDidLoad ListAgentPage');
    this.loaddata();
  }
  presentPopover(value) {
     console.log(value)
    	// alert('hi');
    let popover = this.popoverCtrl.create(ListAgentDetailsPage,{value});
    // alert('hi');
    //let ev = {target : {getBoundingClientRect : () => {return { top:'900' , bottom: '0' };}}}
    popover.present({});
  }
  loaddata(){

          let loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        var link = this.web.webservice+'webserviceagent_details';
        var data = JSON.stringify({});

        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                // this.data.response = data._body;
                console.log(data);
                console.log(data._body);
                console.log(JSON.parse(data._body).agent_details);
                this.agent_details=JSON.parse(data._body).agent_details;
                console.log(this.agent_details);
                this.agent_details=JSON.parse(data._body).agent_details;
                this.agent_detail=JSON.parse(data._body).agent_details;
               
                  this.initializeItems();

                // if (JSON.parse(data._body).response == false || JSON.parse(data._body).response == 'false') {
                //     let alert = this.alertCtrl.create({
                //         title: 'Alert!',
                //         subTitle: 'Please Enter  Your Register Email Id!',
                //         buttons: ['OK']
                //     });
                //     alert.present();
                // } else {
                //     let alert = this.alertCtrl.create({
                //         title: 'Alert!',
                //         subTitle: 'Your Password has been send on your register mail Id please check your mail!',
                //         buttons: [{
                //             text: 'Ok',
                //             handler: data => {
                //                 //this.navCtrl.push(LoginPage);
                //                 console.log('Ok clicked');
                //             }
                //         }]
                //     });
                //     alert.present();
                // }


            }, error => {
               loader.dismiss();
                console.log("Oooops!");
            });
  }
  

}
