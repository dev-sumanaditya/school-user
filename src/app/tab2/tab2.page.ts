import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubPage } from '../sub/sub.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modal: ModalController) {}


  async presentModal() {
    const modal = await this.modal.create({
      component: SubPage
    });
    return await modal.present();
  }
  public dummy = [1,1,1,1,1,1,1,1];

}
