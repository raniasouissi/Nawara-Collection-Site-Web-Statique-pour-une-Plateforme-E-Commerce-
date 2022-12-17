import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';
import {Comment} from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductService } from '../servies/product.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()product:Product;
 //product:Product;
  comment:Comment={rating:0,comment:"",date:new Date()+""};
  goBack(): void {
    this.location.back();
  }


  addComment(){
    this.product.comments.push(this.comment);
    this.comment={rating:0,comment:"",date:new Date()+""};
  }
  constructor(private prodServ: ProductService,
    private route: ActivatedRoute,
    private location: Location) {
     
     }
 

  ngOnInit(): void {
    const ref = this.route.snapshot.params['reference'];
    this.prodServ.getProduct(ref).subscribe(product=>this.product=product);
  }
  /*goback(): void{
    this.location.back();
  }*/

}
