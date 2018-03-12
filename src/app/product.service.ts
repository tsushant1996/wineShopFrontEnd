import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariable } from './static-variable.service';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

      public getAllProducts() {
            let URL = 'http://localhost:3000/api/products/getAllProducts';
            return this._http.get(URL)
                .map((data: any) => {
                 return  data.json();
                });
          }

      public getProductById(productId) {
        let URL = 'http://localhost:3000/api/products/getProductById' + '/' + productId;
          return   this._http.get(URL)
            .map((data: any) => {
              return  data.json();
            });
   }

   public saveProduct(product) {

    let URL = 'http://localhost:3000/api/products/saveProduct';
    return   this._http.post(URL, product)
      .map((data: any) => {
        return  data.json();
      });

   }

      public updateProductById(productId, product) {
        let URL = 'http://localhost:3000/api/products/updateProductById' + '/' + productId;
            return   this._http.post(URL, product)
            .map((data: any) => {
            return  data.json();
            });
      }

      public deleteProductById(productId) {
        let URL = 'http://localhost:3000/api/products/removeProductById' + '/' + productId;
        return   this._http.delete(URL)
        .map((data: any) => {
        return  data.json();
        });
      }
 }
