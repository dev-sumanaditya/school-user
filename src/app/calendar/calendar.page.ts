import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public data;
  public changed = true;

  public date: string;
  public type: 'moment';

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.data = this.navParams.data;
  }

  onChange($event) {
    console.log($event);
  }

  async closemodal(id) {
    console.log('button id :' + id);
    const onClosedData = this.data;
    await this.modalController.dismiss(onClosedData);
  }
}
