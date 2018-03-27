import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ProductService]
})
export class AppComponent {
  title : string = 'Angular: Getting Started';
  pageTitle: string = "Booyahhh  "
  links: any[] = [
    {name: 'Home', target: "['/welcome']" },
    {name: 'Products', target: "['/products']"}
  ];
  
  constructor() {
    this.title = 'Testing';
    
  }
}
