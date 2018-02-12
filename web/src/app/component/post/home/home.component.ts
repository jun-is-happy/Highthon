import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { AuthService } from '../../../service/auth.service';
import { LoaderService } from '../../../service/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private loader: LoaderService) {

  }

  ngOnInit() {
    this.loader.display(false);
  }

}
