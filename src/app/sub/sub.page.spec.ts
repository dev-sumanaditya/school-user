import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubPage } from './sub.page';

describe('SubPage', () => {
  let component: SubPage;
  let fixture: ComponentFixture<SubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
