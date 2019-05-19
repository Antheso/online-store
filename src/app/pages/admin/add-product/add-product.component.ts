import { Component } from '@angular/core';
import { Product } from '../../../model/product';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public product = new Product();

  public saveProduct(): void {
    this.addProductSrv.addProduct(this.product).subscribe((resp) => {
      this.product = new Product();
    });
  }

  constructor(
    private addProductSrv: AddProductService
  ) { }

}
