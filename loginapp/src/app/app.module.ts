import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';
import { ProfileService } from './profile/profile.service';
import { ProfileGaurdService } from './profile-gaurd.service';


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
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent
  ],

  // One and One first component
  bootstrap: [
    AppComponent
  ],

  // All Service
  providers: [
    RegisterService,
    LoginService,
    ProfileService,
    ProfileGaurdService
  ]
})

export class AppModule {

}
