import { Observable } from "rxjs";
import { Product } from "./product.model";
import { InjectionToken } from "@angular/core";

export interface IproductsService {
    getProducts() : Observable<Product[]>
}

export const IProductsServiceToken = new InjectionToken<IproductsService>("IProductsService");