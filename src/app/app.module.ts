import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductService } from './_services/product.services';
import { PaymentTypeService } from './_services/payment-type.service';
import { CustomAppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrductCategoryService } from './_services/product-category';
import {ValidateEqualModule} from 'ng-validate-equal';
import { StringPipePipe } from './pipes/string-pipe.pipe';
import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MyInterceptorService } from './_services/my-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CustomAppRoutingModule,
    HttpClientModule,
    ValidateEqualModule,
    // RouterModule.forRoot([
    //   {path:'product-listing',component:ProductsListingComponent},
    //   {path:'login',component:LoginComponent}
    // ])

  ],
  providers: [ProductService,PaymentTypeService,PrductCategoryService,
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
