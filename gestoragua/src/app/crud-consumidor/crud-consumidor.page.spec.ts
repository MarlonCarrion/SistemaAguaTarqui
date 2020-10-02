import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudConsumidorPage } from './crud-consumidor.page';

describe('CrudConsumidorPage', () => {
  let component: CrudConsumidorPage;
  let fixture: ComponentFixture<CrudConsumidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudConsumidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudConsumidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
