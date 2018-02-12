import { Injectable } from '@angular/core';
import { FacebookService, LoginOptions, InitParams } from 'ngx-facebook';

declare const Kakao;

@Injectable()
export class AuthService {

  constructor(private fb:FacebookService) {
    let initParams: InitParams = {
      appId: '186392138631338',
      xfbml: true,
      version: 'v2.12'
    };

    fb.init(initParams);
  }

  fbLogin() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list,publish_actions,user_posts,manage_pages,publish_pages,user_status,pages_show_list'
    };


    this.fb.login(loginOptions)
      .then((response) => {
        console.log('Logged in', response);
        localStorage.setItem('thisistoken',response.authResponse.accessToken);
        localStorage.setItem('thisisid',response.authResponse.userID);
        location.href = '/result/'+response.authResponse.accessToken;
      })
      .catch(e => alert('Error logging in'));
  }

  fbLogOut() {
    this.fb.logout().then(() => console.log('Logged out!'));
  }

  instaLogin() {
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=97910c535e9a4b8c9700452a219d10fa&redirect_uri=http://localhost:4200/insta&response_type=token`;
  }

}