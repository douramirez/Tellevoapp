// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavController } from '@ionic/angular';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NavController', ['navigateRoot']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: NavController, useValue: spy },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
  });

  it('debería redirigir al usuario a /login si no está autenticado', () => {
    component.setAuthenticationStatus(false);

    component.ngOnInit();

    expect(navCtrlSpy.navigateRoot).toHaveBeenCalledWith('/login');
  });

  it('no debería redirigir si el usuario está autenticado', () => {
    component.setAuthenticationStatus(true);
    component.ngOnInit();
    expect(navCtrlSpy.navigateRoot).not.toHaveBeenCalled();
  });

  // Puedes agregar más pruebas según las características y lógica específica de tu AppComponent
});
