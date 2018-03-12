import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.component.html',
  styleUrls: ['./catlog.component.css']
})
export class CatlogComponent implements OnInit {

  constructor(private _productService: ProductService, private _cartService: CartServiceService) { }
  products: Product[];
  showActions = true;
  ngOnInit() {
    this._productService.getAllProducts()
     .subscribe(p => {
       if (p.status == 1) {
         this.products = p.result.products;
       }
     });
  }

  addToCart(product) {
    console.log('hello');
    this._cartService.saveCart(product)
     .subscribe(p => {
       console.log('product', p);
     });

  }

}
