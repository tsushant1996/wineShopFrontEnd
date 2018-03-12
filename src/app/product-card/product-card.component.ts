import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;


  constructor(private _cartService: CartServiceService) { }

  ngOnInit() {
  }

  addToCart(product) {
    let cartObject =  {productQuantity:5, productId: product._id,bookingDate: Date.now(), status:false };
    this._cartService.saveCart(cartObject)
     .subscribe(p => {
       console.log('product', p);
     });

  }

}
