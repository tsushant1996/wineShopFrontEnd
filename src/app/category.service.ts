import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariable } from './static-variable.service';

@Injectable()
export class CategoryService {

  constructor(private _http: Http) { }

  public getAllCategory() {
    let URL = 'http://localhost:3000/api/category/getAllCategory';
    return this._http.get(URL)
        .map((data: any) => {
         return  data.json();
        });
  }

}
