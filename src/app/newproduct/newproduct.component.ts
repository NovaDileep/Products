import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../productlist/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  title:String="Add Product";
  constructor(private productService:ProductService,private router:Router) { }
  productItem=new ProductModel(0,'','','','',0,0,'');
  ngOnInit(): void {
  }
  AddProduct(){
     this.productService.newProduct(this.productItem);
     console.log("called");
     alert("success");
     this.router.navigate(['/']);
  }
}
