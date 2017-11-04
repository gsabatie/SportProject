import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';

import { Page1 } from '../page1/page1';

@IonicPage()
@Component({
    selector: 'login-component',
    templateUrl: 'login.html',
    styles: ['login.scss']
})
export class LoginComponent {
    private notConnected: boolean = false;
    constructor(public navCtrl: NavController, private platform: Platform, private fb: Facebook, public statusBar: StatusBar) { }

    ionViewDidLoad() {
        this.platform.ready().then(_ => {
            this.fb.getLoginStatus().then((res: FacebookLoginResponse) => {
                if (res.status === 'connected') {
                    this.navCtrl.setRoot(Page1);
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
            this.navCtrl.setRoot(Page1);
            this.statusBar.styleDefault();
        }).catch((e) => {
            console.log(e);
        })
    }
}