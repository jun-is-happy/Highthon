import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {router} from "./app.router";

import {Router, RouterModule} from "@angular/router";

import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/post/home/home.component';

import { AuthService } from './service/auth.service';
import { LoaderService } from './service/loader.service';
import { ConnectionService } from './service/connection.service';

import { SearchPipe } from './pipe/search.pipe';
import { ResultComponent } from './component/post/result/result.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchPipe,
    ResultComponent,
    FilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [AuthService,LoaderService,ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
