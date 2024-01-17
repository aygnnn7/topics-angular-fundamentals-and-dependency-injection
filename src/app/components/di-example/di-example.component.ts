import { Component } from '@angular/core';
import { ProductService } from 'src/app/productservice';

@Component({
  selector: 'app-di-example',
  template: ``
})
export class DiExampleComponent {

  constructor(private productService: ProductService){
    console.log(productService.getProducts());
  }
}
