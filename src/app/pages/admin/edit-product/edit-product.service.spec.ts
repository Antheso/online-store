/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditProductService } from './edit-product.service';

describe('Service: EditProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProductService]
    });
  });

  it('should ...', inject([EditProductService], (service: EditProductService) => {
    expect(service).toBeTruthy();
  }));
});
