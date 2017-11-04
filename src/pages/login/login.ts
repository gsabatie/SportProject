import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../home/home'

@IonicPage()
@Component({
    selector: 'page-logout',
    templateUrl: 'login.html',
    styles: ['login.scss']
})
export class LoginPage {
    private notConnected: boolean = false;
    constructor(public navCtrl: NavController, private platform: Platform, private fb: Facebook, public statusBar: StatusBar) { }

    ionViewDidLoad() {
        this.platform.ready().then(_ => {
            this.fb.getLoginStatus().then((res: FacebookLoginResponse) => {
                if (res.status === 'connected') {
                    this.navCtrl.setRoot(HomePage);
                    this.statusBar.styleDefault();
                } else {
                    this.notConnected = true;
                }
            })
        });
    }

    connect(): void {
        this.fb.login(['email', 'public_profile']).then((res: FacebookLoginResponse) => {
            this.notConnected = false;
            this.navCtrl.setRoot(HomePage);
            this.statusBar.styleDefault();
        }).catch((e) => {
            console.log(e);
        })
    }
}
