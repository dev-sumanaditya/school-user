import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page';
import { CalendarModalOptions } from 'ion2-calendar';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public name = 'John';

  public dataReturned;

  constructor(public modalController: ModalController) {}

  async showCalendar() {

    const options: CalendarModalOptions = {
      color: 'primary',
      cssClass: 'cal'
    };
    const modal = await this.modalController.create({
      component: CalendarPage,
      componentProps: {options}
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log(dataReturned);
      }
    });
    return await modal.present();
  }

}
