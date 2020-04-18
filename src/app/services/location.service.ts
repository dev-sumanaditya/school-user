import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public Dummy = [
    {name: 'Delhi Public School'},
    {name: 'Chinmaya Vidyalay'},
    {name: 'MGM Higher Secondary School'},
    {name: 'Kendriya Vidyalay 1'},
    {name: 'Saint Martin School'}
  ];

  getSchoolData(cords) {
    console.log(cords);
    return this.Dummy;
  }
}
