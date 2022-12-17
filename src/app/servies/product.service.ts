import { Injectable } from '@angular/core';
import { delay, observable, Observable ,of} from 'rxjs';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
//import{HttpClient}from
import { Config } from '../shared/config';
import { HttpClient } from '@angular/common/http';



//import {delay,Observable,of}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  products : Product[]=PRODUCTS;

  /*addProduct(p: Product){
    this.products.push(p);
  }*/
  getAllProducts():Observable<Product[]>
  {
    return  of(this.products).pipe(delay(2000));
  }
  
  getProduct(ref):Observable<Product>{
    //let i=0;
    //while(i<this.products.length){
     //if(this.products[i].reference===ref){
      
      // return this.products[i];
       return of(this.products.filter((product)=>
  (product.reference===ref),)[0]).pipe(delay(2000));
     }
     //i++;
    


  changeQte(index, qte){
    if(this.products[index].stockQte>=qte){
      this.products[index].stockQte-=qte;
    }
  }

  
}
