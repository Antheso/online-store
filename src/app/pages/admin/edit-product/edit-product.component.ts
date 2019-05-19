import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/product';
import { EditProductService } from './edit-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  get products(): Product[] {
    return this.productsSrv.products$.value;
  }

  get editedProd$(): BehaviorSubject<Product> {
    return this.editSrv.editingProduct$;
  }

  constructor(
    private productsSrv: ProductService,
    private editSrv: EditProductService
  ) { }

  public deleteProduct(id: number): void {
    this.editSrv.deleteProduct(id).subscribe(() => {
      this.productsSrv.products$.next(this.products.filter(product => product.product_id !== id));
    });
  }

  public editProduct(product: Product): void {
    this.editedProd$.next(product);
  }

}
