import { Component, Input } from '@angular/core';

import { CookieService } from 'ngx-cookie';
import { Product } from '../../model/product';
import { EditProductService } from '../../pages/admin/edit-product/edit-product.service';

const votedKey = 'shopVoted';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {

  @Input() products: Product[] = [];
  public favProduct: Product;
  public visible = true;

  get voted(): boolean {
    return !!this.cookie.get(votedKey);
  }

  constructor(
    private cookie: CookieService,
    private editSrv: EditProductService
  ) { }

  public vote() {
    this.favProduct.vote_count++;
    this.editSrv.updateProduct(this.favProduct).subscribe(() => this.cookie.put(votedKey, 'yes'));
  }

}
