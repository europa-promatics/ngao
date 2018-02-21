import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostService {

  constructor(public http: Http) {
    // console.log('Hello PostService Provider');
  }
  getPosts() {
    return this.http.get('https://photocloudapp.herokuapp.com/api/v1/posts')
      .map(res => res.json());
  }

}
