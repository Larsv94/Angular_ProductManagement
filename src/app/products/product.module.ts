import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
       component: ProductDetailComponent,
       canActivate:[ProductGuardService]
      } 
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent],
    providers: [
      ProductGuardService, 
      ProductService]
})
export class ProductModule { }
