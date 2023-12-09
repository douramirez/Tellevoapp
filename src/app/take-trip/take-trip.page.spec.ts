import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeTripPage } from './take-trip.page';

describe('TakeTripPage', () => {
  let component: TakeTripPage;
  let fixture: ComponentFixture<TakeTripPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TakeTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
