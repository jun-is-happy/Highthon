import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { json } from '../component/post/result/json';

@Injectable()
export class ConnectionService {

  URL = "http://soylatte.kr:2233/postsInfo/";
  

  constructor(private http:Http) {
    
  }

  getPostList() {
    var token = localStorage.getItem('thisistoken');
    return this.http.get(this.URL + token).map(res => res.text);
  }

  getLists(token:String): Observable<json[]> {
    return this.http.get(this.URL + token)
      .map(res => res.json().result);
  }

}
