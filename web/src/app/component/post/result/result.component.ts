import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoaderService } from '../../../service/loader.service';
import { json } from './json'
import { ConnectionService } from '../../../service/connection.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  imageUrl;

  result: json[];

  filter:json = new json();

  val;
  

  URL = "http://soylatte.kr:2233/postsInfo/";

  fbURL = "http://facebook.com/";

  constructor(private route: ActivatedRoute, private http:Http,private loader:LoaderService,private connection:ConnectionService) { }

  ngOnInit() {

    let key = this.route.snapshot.url[1].path;

    console.log(key);

    //this.loader.display(true);
    this.imageUrl = "http://graph.facebook.com/"+localStorage.getItem('thisisid')+"/picture?width=30&height=30";

    //console.log(this.URL+localStorage.getItem('thisistoken'));
    this.connection.getLists(localStorage.getItem('thisistoken')).subscribe(
      (result:json[]) => {
        this.result = result;
      }
    )
  }

  goFacebook(id:String) {
    window.location.href=this.fbURL+id.split('_')[1];
  }

  openModal() {
    console.log(this.val);
    let body = {
      text : this.val
    }
    
    this.http.get("http://soylatte.kr:2233/add/"+this.val);
  }

  



}
