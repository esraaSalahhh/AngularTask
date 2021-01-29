import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()

export class ProductService {
  private products: Product[]=[];
  //   {
  //     id: 1,
  //     data: [{ name: 'photo camera', description: 'eeeee' }],
  //     price: 300,
  //     category:{id:1},
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 2,
  //     data: [{ name: 'camera', description: 'eeeee' }],
  //     price: 6000,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 3,
  //     data: [{ name: 'Phone', description: 'eeeee' }],
  //     price: 500,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 4,
  //     data: [{ name: 'Photo camera', description: 'eeeee' }],
  //     price: 300,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 5,
  //     data: [{ name: 'camera', description: 'eeeee' }],
  //     price: 6000,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 6,
  //     data: [{ name: 'Phone', description: 'eeeee' }],
  //     price: 500,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 7,
  //     data: [{ name: 'Photo camera', description: 'eeeee' }],
  //     price: 300,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 8,
  //     data: [{ name: 'camera', description: 'eeeee' }],
  //     price: 6000,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 9,
  //     data: [{ name: 'Phone', description: 'eeeee' }],
  //     price: 500,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 10,
  //     data: [{ name: 'new', description: 'eeeee' }],
  //     price: 300,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 11,
  //     data: [{ name: 'new', description: 'eeeee' }],
  //     price: 6000,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 12,
  //     data: [{ name: 'new', description: 'eeeee' }],
  //     price: 500,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   },
  //   {
  //     id: 13,
  //     data: [{ name: 'new', description: 'eeeee' }],
  //     price: 500,
  //     discount: 30,
  //     imagesUrls: ['../../../../assets/img/product-grey-1.jpg'],
  //   }
  productAdded = new EventEmitter<Product>();
  currentPage = 'listing';
  baseUrl='https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient:HttpClient){
  }
  getAllProducts() {
   return this.httpClient.get(`${this.baseUrl}product`);
    // return this.products.slice();      ///act as a clone 
  }
  getProductById(id) {
    // return this.products.find(p => p.id === id);
    return this.httpClient.get(`${this.baseUrl}product/${id}`)

  }
  addProduct(product: Product) {
    // const id = this.products.length;
    // const {data,price,discount,category,imagesUrls,paymentTypes,tags}=product;
    // const newProduct: Product = { 
    //   id, 
    //   data, 
    //   price: product.price, 
    //   discount: product.discount, 
    //   category: product.category, 
    //   imagesUrls: product.imagesUrls, 
    //   paymentTypes: product.paymentTypes, 
    //   tags: product.tags };
    // this.products.push(newProduct);

    // console.log(this.products);
    
    let body={
      discount :product.discount,
      price:product.price,
      imagesUrls:product.imagesUrls,
      data:product.data,
      categoryId:product.category.id,
    };
    // const token=localStorage.getItem('token');
    // console.log(token);
    
    // const headers=new HttpHeaders({
    //   authorization:token
    // });
     return this.httpClient.post(`${this.baseUrl}product/add`,body);
  }
  updateProduct(product: Product) {
    const index = this.products.findIndex(p => p.id === product.id);
    
    this.products[index] = {
      _id:product._id, 
      id:product.id, 
      data:product.data, 
      price: product.price, 
      discount: product.discount, 
      category: product.category, 
      imagesUrls: product.imagesUrls, 
      paymentTypes: product.paymentTypes, 
  }}
  deleteProduct(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  }
  searchByName(productName:string){
    const prodName=productName.toLowerCase();
    return this.products.filter(p => p.data[0].name.toLowerCase().includes(prodName));
  }

}