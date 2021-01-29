import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_model/product';
import {ProductService} from 'src/app/_services/product.services';
@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
   products:Product[];
  // @Output() productAdded= new EventEmitter<Product>();
  pageNumbers:number[]=[];
  pageSize=9;
  currentPage=0;
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit(): void {
    // this.products=this.productService.getAllProducts();
  //   this.productService.getAllProducts().subscribe(
  //     (response)=>{this.products=response['product'];
  //   this.calculateNumberOfPages(response['numberOfProducts']);
  // },
  //     (err)=>{console.log(err);},
  //     ()=>{}

  //   );

    console.log(this.productService.getAllProducts().subscribe(
      (response)=>{this.products=response['product'];
      this.calculateNumberOfPages(response['numberOfProducts']);
      
      },
      (err)=>{console.log(err);
      },
      ()=>{}

    ));
    
    
  }
  calculateNumberOfPages(length){
    this.pageNumbers=[];
    for (let index = 0; index < length/this.pageSize; index++) {
      this.pageNumbers.push(index+1);
    }
  }
  // onSearchHandler(searchInput){
  //   this.products=this.productService.searchByName(searchInput.value);
  //   this.calculateNumberOfPages();
  //   console.log(searchInput.value);
  // }
  // subscribeFunction(object:Product):void{
  //   // alert('listed');
  //   // this.productAdded.emit(object);
  //  this.productService.productAdded.emit(object);
  //   // console.log(object);
  // //   const test= (this.notifica.nativeElement as HTMLDivElement).innerHTML;
  // //  console.log(test);
  // //  const s=parseInt(test);
  // //  (this.notifica.nativeElement as HTMLDivElement).innerHTML= (s+1).toString();
    
  // }

}
