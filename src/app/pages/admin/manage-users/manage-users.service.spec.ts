/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersService } from './manage-users.service';

describe('Service: ManageUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersService]
    });
  });

  it('should ...', inject([ManageUsersService], (service: ManageUsersService) => {
    expect(service).toBeTruthy();
  }));
});
