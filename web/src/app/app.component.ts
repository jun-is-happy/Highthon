import { Component,OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoaderService]
})
export class AppComponent implements OnInit {
  showLoader: boolean;

  constructor(private loaderService: LoaderService) {
    
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
  });
  }
}
