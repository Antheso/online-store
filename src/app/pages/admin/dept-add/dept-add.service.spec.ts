/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeptAddService } from './dept-add.service';

describe('Service: DeptAdd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeptAddService]
    });
  });

  it('should ...', inject([DeptAddService], (service: DeptAddService) => {
    expect(service).toBeTruthy();
  }));
});
