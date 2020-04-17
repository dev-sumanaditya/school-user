import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: ['./sub.page.scss'],
})
export class SubPage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

}
