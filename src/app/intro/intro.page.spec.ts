import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroPage } from './intro.page';
import { IonicModule } from '@ionic/angular';

describe('IntroPage', () => {
  let component: IntroPage;
  let fixture: ComponentFixture<IntroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
