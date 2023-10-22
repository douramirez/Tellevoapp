import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoPage } from './auto.page';

describe('AutoPage', () => {
  let component: AutoPage;
  let fixture: ComponentFixture<AutoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

