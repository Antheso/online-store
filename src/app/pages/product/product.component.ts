import { Component } from '@angular/core';

import {ProductService} from '../../services/products.service';
import {Product} from '../../model/product';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    quantity = 1;

    get product(): Product {
        return this.productService.product$.value;
    }

    constructor(
        private productService: ProductService,
        private cartService: CartService
    ) { }

}
