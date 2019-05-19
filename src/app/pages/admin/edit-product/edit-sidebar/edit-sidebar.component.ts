import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { Product } from '../../../../../app/model/product';
import { EditProductService } from '../edit-product.service';

@Component({
  selector: 'app-edit-sidebar',
  templateUrl: './edit-sidebar.component.html',
  styleUrls: ['./edit-sidebar.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        style({
          right: '-100%'
        }),
        animate('0.5s 0.1s ease', style({
          right: '0'
        }))
      ]),
      transition(':leave', [
        style({
          right: '0'
        }),
        animate('0.5s 0.1s ease', style({
          right: '-100%'
        }))
      ])
    ]),
  ]
})
export class EditSidebarComponent {

  get product(): Product {
    return this.editSrv.editingProduct$.value;
  }

  constructor(
    private editSrv: EditProductService
  ) { }

  public updateProduct(): void {
    this.editSrv.updateProduct(this.product).subscribe(() => {
      this.close();
    });
  }

  public close(): void {
    this.editSrv.editingProduct$.next(void 0);
  }

}
