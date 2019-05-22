import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from '../../model/product';
import { ProductService } from '../../services/products.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryFullResolver implements Resolve<Product[]> {

  constructor(
    private productsSrv: ProductService
  ) { }

  public resolve(): Observable<Product[]> {
    return this.productsSrv.getFullProducts();
  }

}
