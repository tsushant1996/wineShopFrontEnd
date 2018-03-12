import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariable } from './static-variable.service';

@Injectable()
export class CartServiceService {

  constructor(private _http: Http) { }

  public saveCart(cart) {
    let URL = 'http://localhost:3000/api/carts/saveCart';
    return   this._http.post(URL, cart)
      .map((data: any) => {
        return  data.json();
      });
  }

}
