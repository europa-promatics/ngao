import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebserviceUrl provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebserviceUrl {
	public webservice: string = "http://18.221.76.63/ngao/";

  constructor(public http: Http) {
    console.log('Hello WebserviceUrl Provider');
  }

}
