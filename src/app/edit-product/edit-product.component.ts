import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id;
 product = {};
 categories: any[];

  constructor(private _router: Router,
     private _route: ActivatedRoute,
     private _productService: ProductService,
     private _categoryService: CategoryService
    ) {
   
}

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    
    if (this.id) {
      console.log('product found id', this.id);

      this._productService.getProductById(this.id)
       .subscribe(p => {
         if (p.status == 1){
           this.product = p.result.product;
           console.log('this product', this.product['category']);
         }
         else {
           console.log('product not found');
         }
       });
    }

    this._categoryService.getAllCategory()
     .subscribe(c => {
       if (c.status == 1){
         this.categories = c.result.categories;
       }
     });
  }

  public save(product) {
    console.log('form value', product);
    if (this.id) {
    this._productService.updateProductById(this.id, product)
     .subscribe(p => {
       console.log('updated product', p);
       this._router.navigate(['/admin/manageproducts']);
     });
    } else {
      this._productService.saveProduct(product)
       .subscribe(p => {
        console.log('save product', p);
        this._router.navigate(['/admin/manageproducts']);
       });
    }
  }

  public delete() {
    this._productService.deleteProductById(this.id)
     .subscribe(data => {
       console.log('this product has been deleted');
       this._router.navigate(['/admin/manageproducts']);
     });
  }

}
