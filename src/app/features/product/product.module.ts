import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StringPipePipe } from "src/app/pipes/string-pipe.pipe";
import { productItemComponent } from "src/app/products/product-item/product-item.component";
import { ProductsListingComponent } from "src/app/products/products-listing/products-listing.component";
import { AuthGuardService } from "src/app/_services/auth-guard.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
    declarations:[
        productItemComponent,
    ProductsListingComponent,
    AddProductComponent,
    ProductDetailsComponent,
    StringPipePipe,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
        {path:'',children:[
            {path:'',component:ProductsListingComponent},
            {path:'add',component:AddProductComponent,canActivate:[AuthGuardService]},
            {path:'details/:id',component:ProductDetailsComponent},
            {path:'edit/:id',component:AddProductComponent},
        ]},
        
    ])
    ],
    exports:[],
    providers:[],
})


export class ProductModule{

}