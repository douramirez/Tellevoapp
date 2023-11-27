import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería obtener los conductores en la función getConductor()', () => {
    const datosPrueba = { results: Array(10).fill({}) }; // Aquí puedes poner los datos de prueba que esperas recibir

    service.getConductor().subscribe((conductores) => {
      expect(conductores.results.length).toBe(10);
    });

    const req = httpMock.expectOne('https://randomuser.me/api/?results=10');

    expect(req.request.method).toBe('GET');

    req.flush(datosPrueba); // Proporciona datos ficticios como respuesta
  });
});