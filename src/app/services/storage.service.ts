import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  public store(key, val) {
    this.storage.set(key, val);
  }

  public fetch(key) {
    this.storage.get(key).then((val) => {
      console.log('data :', val);
    });
  }
}
