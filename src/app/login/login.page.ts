import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { LocationService } from '../services/location.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public locating = false;
  public showLoginPage = false;


  public location;
  public schoolData;

  constructor(
    private geolocation: Geolocation,
    public alertController: AlertController,
    public locService: LocationService
  ) { }

  ngOnInit() {
  }

  public async getLocation() {
    this.locating = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.location = resp;
      this.schoolData = this.locService.getSchoolData(location);
    }).catch((error) => {
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: '<strong>Unable to get location data</strong>!!!',
      buttons: [
        {
          text: 'Retry',
          handler: () => {
            this.getLocation();
          }
        }
      ]
    });

    await alert.present();
  }

  public showLogin() {
    this.showLoginPage = true;
  }
}
