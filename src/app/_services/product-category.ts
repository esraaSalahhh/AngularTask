import { ProductCategory } from "../_model/product-category";

export class PrductCategoryService{
    productCategory:ProductCategory[]=[
        { id: '5eac38b30cfca15d7c804090' , name:'ArtsCrafts'},
        {id:'5eac39170cfca15d7c804091' , name:'Automotive'},
        {id:'5eac39270cfca15d7c804092' , name:'Baby'},
        {id:'5eacc09bba43cd4b889f3d12' , name:'Books'},
        {id:'5eacc0a4ba43cd4b889f3d13' , name:'Eletronics'},
        {id:'5eacc0b6ba43cd4b889f3d14' , name:'Womens Fashion'},
        {id:'5eacc0bfba43cd4b889f3d15' , name:'Mens Fashion'},
        {id:'5eacc0c8ba43cd4b889f3d16' , name:'Health & Household'},
        {id:'5eacc0cdba43cd4b889f3d17' , name:'Home & Kitchen'},
        {id:'5eacc0d3ba43cd4b889f3d18' , name:'Military Accessories'},
        {id:'5eacc0d9ba43cd4b889f3d19' , name:'Movies & Television'},
        {id:'5eacc0deba43cd4b889f3d1a' , name:'Sports & Outdoors'},
        {id:'5eacc0e3ba43cd4b889f3d1b' , name:'Tools & Home Improvement'},
        {id:'5eacc0e8ba43cd4b889f3d1c' , name:'Toys & Games'},
        { id: '5eacc0a4ba43cd4b889f3d13' , name:'Macbook labtop'},
       

    ];

    getAllProductCategory():ProductCategory[]{
        return this.productCategory.slice();
    }
}