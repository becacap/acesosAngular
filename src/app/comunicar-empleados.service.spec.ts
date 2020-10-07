import { TestBed } from '@angular/core/testing';

import { ComunicarEmpleadosService } from './comunicar-empleados.service';

describe('ComunicarEmpleadosService', () => {
  let service: ComunicarEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicarEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
