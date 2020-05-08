import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MyUpperPipe } from './hotels/myupper.pipe';
import { DiscountPipe } from './hotels/discount.pipe';
import { ProductSearch } from './hotels/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { HotelsService } from './hotels/hotels.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelDetailsComponent } from './hotels/hotel-details.component';

@NgModule({
  // All your Module & Routing Will be declare here
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],

  // All Component, Pipe & Directive  Will be declare here
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    MyUpperPipe,
    DiscountPipe,
    ProductSearch,
    StarComponent,
    HomeComponent,
    OrdersComponent,
    HotelDetailsComponent
  ],

  // One and One first component
  bootstrap: [
    AppComponent
  ],

  // All Service
  providers: [
    HotelsService
  ]
})


export class AppModule {

}
