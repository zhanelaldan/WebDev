import { Component, Input, Output } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input() category: string | undefined;
  products = products;

  share(product: Product) {
    window.open(`https://t.me/share/url?url=${product.url}&text=xssxcfscxscsc`);
  }
  remove(product: Product) {
    this.products = this.products.filter( (x) => x.id !== product.id);
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/