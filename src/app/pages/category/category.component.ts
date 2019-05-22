import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import {ProductService} from '../../services/products.service';
import {Product} from '../../model/product';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

    private subs: Subscription = new Subscription();

    get products(): Product[] {
        return this.productService.products$.value;
    }

    get voteProducts(): Product[] {
        return this.productService.fullProducts$.value.filter(product => !!product.votable);
    }

    get pages(): any {
        return this.productService.pages;
    }

    get limit(): any {
        return this.productService.limit;
    }

    get offset(): any {
        return this.productService.offset;
    }

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.subs.add (
            this.route.queryParams.pipe(
                switchMap(params => this.productService.getProducts(params.limit, params.offset))
            ).subscribe()
        );
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
