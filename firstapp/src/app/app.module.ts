import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MyUpperPipe } from './hotels/myupper.pipe';
import { DiscountPipe } from './hotels/discount.pipe';

@NgModule({
  // All your Module & Routing Will be declare here
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  // All Component, Pipe & Directive  Will be declare here
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    MyUpperPipe,
    DiscountPipe
  ],

  // One and One first component
  bootstrap: [
    AppComponent
  ],

  // All Service
  providers: []
})


export class AppModule {

}
