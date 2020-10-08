import { TestBed } from '@angular/core/testing';

import { CalendarioEmpleadoService } from './calendario-empleado.service';

describe('CalendarioEmpleadoService', () => {
  let service: CalendarioEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
