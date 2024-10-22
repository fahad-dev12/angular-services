import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CART_OPTIONS_TOKENS, CartOptions, CartService } from '@core/cart.service';
import { IproductsService, IProductsServiceToken } from '@shared/products-service.interface';
import { EngineersService } from './engineers.service';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide : CART_OPTIONS_TOKENS,
      useValue : {        persistenceType : 'local',        persistenceKey : 'squad-cart'      },
      multi : false ,
    },
    // CartService,
    {
      provide : CartService,
      useFactory : (cartOptions : CartOptions) => {return new CartService(cartOptions);},
      deps : [CART_OPTIONS_TOKENS],
      multi : false
    },
  //   {
  //   provide : IProductsServiceToken,
  //   useClass : EngineersService,
    
  // }
],
})
export class SquadModule { }
