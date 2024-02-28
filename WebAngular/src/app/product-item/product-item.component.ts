import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() removeProduct = new EventEmitter();
  @Output() shareProduct = new EventEmitter();

  isLiked: boolean = false;

  pressLike(){
    if (this.product !== undefined){
      (!this.isLiked ? this.product.likes++ : this.product.likes--)
      this.isLiked = !this.isLiked;
    }
  }

  remove(product: Product) {
    this.removeProduct.emit(product);
  }

  share(product: Product) {
    this.shareProduct.emit(product);
  }
}