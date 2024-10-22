import { Product } from "@shared/product.model";
import { productsArray } from "./products-data";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IproductsService } from "@shared/products-service.interface";

@Injectable({ providedIn: 'root'  })
export class ProductsService implements IproductsService{
    private products : Subject<Product[]> = new Subject() ; 

    constructor(private httpClient : HttpClient){

    }

    getProducts() : Observable<Product[]> {
        return  this.httpClient.get<Product[]>("/api/products");
    }

    


}