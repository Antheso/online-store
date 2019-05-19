import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, pluck } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

    public products$: BehaviorSubject<Product[]> = new BehaviorSubject(void 0);
    public product$: BehaviorSubject<Product> = new BehaviorSubject(void 0);
    public itemsCount = 0;
    public offset = 0;
    public limit = 3;

    get pages(): any {
        return Array(Math.ceil(this.itemsCount / this.limit)).fill(1).map((x, i) => {
            const pageNum = i + 1;

            return {
                pageNum,
                offset: this.limit * i
            };
        });
    }

    constructor(
        private api: ApiService
    ) { }

    public getProducts(limit: number, offset: number): Observable<Product[]> {
        return this.api.get('/products', {
            limit,
            offset
        }).pipe(
            tap(data => {
                this.itemsCount = data.count;
                this.offset = data.offset;
            }),
            pluck('products'),
            tap(products => this.products$.next(products)),
            catchError((error: any) => throwError(error || 'Server error'))
        );
    }

    public getProduct(id: number): Observable<Product> {
        return this.api.get(`/products/${id}`).pipe(
            tap(product => this.product$.next(product)),
            catchError((error: any) => throwError(error || 'Server error'))
        );
    }

}
