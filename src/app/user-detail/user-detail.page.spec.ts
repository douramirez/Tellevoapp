import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailPage } from './user-detail.page';
import { IonicModule } from '@ionic/angular';

xdescribe('UserDetailPage', () => {
  let component: UserDetailPage;
  let fixture: ComponentFixture<UserDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
