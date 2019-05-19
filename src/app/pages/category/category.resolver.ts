import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from '../../model/product';
import { ProductService } from '../../services/products.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Product[]> {

  constructor(
    private productsSrv: ProductService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    console.log('resolver');
    return this.productsSrv.getProducts(route.queryParams.limit, route.queryParams.offset);
  }

}
