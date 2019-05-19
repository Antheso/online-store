import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../../../model/product';
import { ApiService } from '../../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

  public editingProduct$: BehaviorSubject<Product> = new BehaviorSubject(void 0);

  constructor(
    private api: ApiService
  ) { }

  public updateProduct(product: Product): Observable<any> {
      return this.api.patch(`/products/${product.product_id}`, product).pipe(
          catchError((error: any) => throwError(error || 'Server error'))
      );
  }

  public deleteProduct(id: number): Observable<any> {
      return this.api.delete(`/products/${id}`).pipe(
          catchError((error: any) => throwError(error || 'Server error'))
      );
  }

}
