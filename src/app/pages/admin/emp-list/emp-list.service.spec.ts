/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpListService } from './emp-list.service';

describe('Service: EmpList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpListService]
    });
  });

  it('should ...', inject([EmpListService], (service: EmpListService) => {
    expect(service).toBeTruthy();
  }));
});
