import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuB8ar-BgdZJ_RDm9KlhsOopFTZ-v-W9KkIqTt8566ioDBH0ze&usqp=CAU';

  public info = [
    {name: 'Roll No', val: '12345678'},
    {name: 'Class', val: '5/C'},
    {name: 'Class Teacher', val: 'Miss Namita Sharma'},
    {name: 'Username', val: 'student123'}
  ];

  constructor() {}

}
