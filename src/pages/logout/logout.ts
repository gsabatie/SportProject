import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { LoginPage } from '../login/login';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    template: ''
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public fb: Facebook) {}

  ionViewDidLoad() {
    this.fb.logout().then((res: FacebookLoginResponse) => {
        this.navCtrl.setRoot(LoginPage);
    });
  }

}
