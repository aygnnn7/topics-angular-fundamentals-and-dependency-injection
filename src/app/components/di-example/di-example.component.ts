import { Component, Inject } from '@angular/core';
import { productServiceIT } from 'src/app/injection-token';
import { ProductService } from 'src/app/productservice';

@Component({
  selector: 'app-di-example',
  template: ``
})
export class DiExampleComponent {

  constructor( @Inject("productService") private productService: ProductService
 // @Inject(productServiceIT) private productService: ProductService,
 // @Inject("example") example: string,
 // @Inject("func") func:any),
)
  {
    // console.log(productService.getProducts());
    // console.log(example);
    // console.log(func());
    console.log(productService.getProducts());
    
  }
}
