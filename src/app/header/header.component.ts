import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.services';
// import {ProductService} from '../_services/product.services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
   cartArray:Product[]=[];
  constructor(private productService:ProductService) { }
 

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res)=>{
        this.cartArray.push(res);
      },
      (err)=>{console.error(err)},
      (completed)=>{alert('completed')}

    );
  }
  ngOnChanges(changes){
    
    console.log(changes);
  }

  totalPrice():number{
    // console.log(this.cartArray);
   let total=0;
    for (let index = 0; index < this.cartArray.length; index++) {
      total = this.cartArray[index].discount?this.cartArray[index].price-this.cartArray[index].discount+total:this.cartArray[index].price+total;
      
    }
    return total;
  }

  changeCurrentPage(dest:string){
    this.productService.currentPage=dest;

  }




}
