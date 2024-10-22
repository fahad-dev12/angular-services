import { Product } from "@shared/product.model";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { IproductsService } from "@shared/products-service.interface";
import { engineers } from "./squad-catalog/engineers";

@Injectable({ providedIn: 'root'  })
export class EngineersService implements IproductsService{
    constructor(){    }

    getProducts() : Observable<Product[]> {
        return  of(engineers)
    }
}