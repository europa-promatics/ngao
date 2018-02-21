import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
/*

/*
  Generated class for the ListAgentDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-agent-details',
  templateUrl: 'list-agent-details.html'
})
export class ListAgentDetailsPage {
    value;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

     this.value = navParams.get('value');
     console.log(this.value.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListAgentDetailsPage');
  }

}
