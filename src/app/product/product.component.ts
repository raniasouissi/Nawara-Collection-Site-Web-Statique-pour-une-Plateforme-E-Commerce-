import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
import { ProductService } from '../servies/product.service';
import { Observable } from 'rxjs';
import { Config } from '../shared/config';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  bdUrl:string;

  products : Product[]=PRODUCTS;
  qte : number[]=[0,0,0,0];
  total : number[]=[0,0,0,0];
  finalTotal=0;
  product: Product;
  selectedProd: any;

  constructor(private servProd:ProductService) {
    this.servProd.getAllProducts().subscribe(products=>this.products=products);}
   
   
   ngOnInit(): void {
  }

   
addCommand(index) {this.total[index]=this.products[index].unitPrice*this.qte[index]}

    
  
  order(){
    this.finalTotal=0;
    for (let i=0;i<4;i++){
      this.finalTotal+=this.total[i];
      this.changeQte(i,this.qte[i]);
      this.qte[i]=0;
      this.total[i]=0;

  }
  }
  changeQte(index,qte){
    if(this.products[index].stockQte>=qte){
      this.products[index].stockQte-=qte;
      
  }
  


  

  

}
onSelect (prod) { 
  this.selectedProd = prod ;}

  

}