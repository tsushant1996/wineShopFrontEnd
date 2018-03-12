import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CategoryService } from './category.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CatlogComponent } from './catlog/catlog.component';
import { environment } from '../environments/environment';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { DataTableModule } from 'angular2-datatable';
import { ProductService } from './product.service';
import { GlobalVariable } from './static-variable.service';
import { HttpModule } from '@angular/http';
import { ProductCardComponent } from './product-card/product-card.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartServiceService } from './cart-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CatlogComponent,
    ManageProductsComponent,
    ProductCardComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '',
       component: CatlogComponent
      },
      { path: 'login',
       component: LoginComponent
      },
      { path: 'admin/editproductform/:id',
      component: EditProductComponent
     },
     { path: 'admin/editproductform',
     component: EditProductComponent
    },
      { path: 'admin/manageproducts',
       component: ManageProductsComponent
      }
  ]
)],
  providers: [AuthService, CategoryService, ProductService, CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
