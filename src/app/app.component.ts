import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/product.services';
// import { ProductService } from './_services/product.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>hello world</h1>`,
  // styles:[`h1{
  //   color:red
  // }`]
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  productsArray:Product[]=[];
  // productService=new ProductService();
  currentPage:string;
  constructor(private productService:ProductService){
    
  }
 
  ngDoCheck() {
    this.currentPage=this.productService.currentPage;
    // console.log(this.currentPage);
  }
  addToCartAtHeader(product: Product){
    this.productsArray.push(product);
    // console.log(this.productsArray);
    
  }
}
