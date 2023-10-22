import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaconductoresPage } from './listaconductores.page';

describe('ListaconductoresPage', () => {
  let component: ListaconductoresPage;
  let fixture: ComponentFixture<ListaconductoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
