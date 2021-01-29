import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { PrductCategoryService } from 'src/app/_services/product-category';
import { ProductService } from 'src/app/_services/product.services';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:Product={_id:'',data:[{}],paymentTypes:[],tags:[],category:{}};
paymentTypes:PaymentType[]=[];
productCategory:ProductCategory[]=[];
radiobutton:number;
editMode:Boolean=false;
  constructor(
    private activaedRoute:ActivatedRoute,
    private paymentTypeService :PaymentTypeService, 
    private productCategoryService:PrductCategoryService,
    private productService:ProductService,
    private router:Router
    ) {
    
   }

  ngOnInit(): void {
    this.editMode=this.activaedRoute.snapshot.url[1] && this.activaedRoute.snapshot.url[1].path === 'edit'  && true;
    if(this.editMode){
      const id=parseInt(this.activaedRoute.snapshot.params.id,10);
      // this.product=this.productService.getProductById(id);
    }
    
    this.paymentTypes=this.paymentTypeService.getAllPayments();
    this.productCategory=this.productCategoryService.getAllProductCategory();
  }

  onSubmit(form){
    // for (let index = 0; index < this.paymentTypes.length; index++) {
    //   if(form.value['check_'+index]){
    //     this.product.paymentTypes.push(this.paymentTypes[index]);
    //   }      
    // }
    // console.log(form.value);
    this.productService.addProduct(this.product).subscribe(
      (response)=>{
      this.router.navigate(['/product','listing']);
      console.log(response);
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    );
  }
 

  onTagAdded(tagInput){
    this.product.tags.push({name:tagInput.value,id:tagInput.value});
    tagInput.value='';
  }

  removetag(id){
    this.product.tags=this.product.tags.filter(p => p.id !== id);
  }
  deleteAlltags(){
    this.product.tags.length=0;
  }

}
