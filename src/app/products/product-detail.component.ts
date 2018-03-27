import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct


  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productRepo: ProductService) {

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._productRepo.getProduct(id).subscribe(
      product => {this.product=product;
        console.log(product);
        
      },
      err=>console.error(err)
    );
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }

}
