import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../services/products.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(
    private productsSrv: ProductService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productsSrv.getProduct(route.params.id);
  }

}
