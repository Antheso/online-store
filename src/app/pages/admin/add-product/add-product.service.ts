import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../../../services/api.service';
import { Product } from '../../../model/product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(
    private api: ApiService
  ) { }

  public addProduct(product: Product): Observable<any> {
    return this.api.post('/products', product);
  }

}
