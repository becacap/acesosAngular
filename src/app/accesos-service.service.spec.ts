import { TestBed } from '@angular/core/testing';

import { AccesosServiceService } from './accesos-service.service';

describe('AccesosServiceService', () => {
  let service: AccesosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
