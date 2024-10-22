import { Component, Inject, inject, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductsService } from './products.service'; 
import {  CartService } from '@core/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  
})
export class CatalogComponent {
  products : Observable<Product[]> = this.productsServices.getProducts();

  constructor( private productsServices : ProductsService ,
    private cartService : CartService ) {

  }

   

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
