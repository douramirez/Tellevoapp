import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaconductoresPage } from './listaconductores.page';
import { IonicModule } from '@ionic/angular';

xdescribe('ListaconductoresPage', () => {
  let component: ListaconductoresPage;
  let fixture: ComponentFixture<ListaconductoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaconductoresPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
