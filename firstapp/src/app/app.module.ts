import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

@NgModule({
  // All your Module & Routing Will be declare here
  imports: [
    BrowserModule,
    HttpClientModule
  ],

  // All Component, Pipe & Directive  Will be declare here
  declarations: [
    AppComponent
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
