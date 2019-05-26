/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpAddService } from './emp-add.service';

describe('Service: EmpAdd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpAddService]
    });
  });

  it('should ...', inject([EmpAddService], (service: EmpAddService) => {
    expect(service).toBeTruthy();
  }));
});
