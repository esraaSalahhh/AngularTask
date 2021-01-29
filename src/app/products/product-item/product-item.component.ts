import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
    selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']

})

export class productItemComponent implements OnInit{
  @Input() product :Product;
//  @Output() itemAdded=new EventEmitter<Product>();     //hna mn child to parent >>>> w byb3t eno 3ml click 3la anhe card

constructor (private productService:ProductService){
  //  this.product={id:1 ,name:'Photo camera',price:300,imgUrl:'../../../../assets/img/product-grey-1.jpg'};

 }
  ngOnInit(): void {
    // this.product=this.productService.getProductById(this.product.id);
  }
 
  addToCart():void{     ////hwa ana m4t3l4 hna 3ltol leh!!!
    // console.log(this.product);
    // this.itemAdded.emit(this.product);
    this.productService.productAdded.emit(this.product);
  }
}