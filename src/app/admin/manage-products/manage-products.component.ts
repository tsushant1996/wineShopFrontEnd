import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;
  public sortBy = 'title';
  public sortOrder = 'asc';

  constructor(private _productService: ProductService) {
    
   }


  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
      this.products;
   }

  ngOnInit() {
    this._productService.getAllProducts()
     .subscribe(p => {
          if (p.status == 1) {
            this.filteredProducts = this.products = p.result.products;
            console.log('this product', this.products);
          } else {
            console.log('data not found');
       }
     });
  }

}
