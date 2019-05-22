import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Subscription } from 'rxjs';

import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/product';
import { EditProductService } from './edit-product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  private subs: Subscription = new Subscription();

  get products(): Product[] {
    return this.productsSrv.products$.value;
  }

  get editedProd$(): BehaviorSubject<Product> {
    return this.editSrv.editingProduct$;
  }

  get pages(): any {
    return this.productsSrv.pages;
  }

  get limit(): any {
    return this.productsSrv.limit;
  }

  get offset(): any {
    return this.productsSrv.offset;
  }

  constructor(
    private productsSrv: ProductService,
    private editSrv: EditProductService,
    private route: ActivatedRoute
  ) { }

  public deleteProduct(id: number): void {
    this.editSrv.deleteProduct(id).subscribe(() => {
      this.productsSrv.products$.next(this.products.filter(product => product.product_id !== id));
    });
  }

  public editProduct(product: Product): void {
    this.editedProd$.next(product);
  }

  public ngOnInit(): void {
    this.subs.add (
      this.route.queryParams.pipe(
        switchMap(params => this.productsSrv.getProducts(params.limit, params.offset))
      ).subscribe()
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
