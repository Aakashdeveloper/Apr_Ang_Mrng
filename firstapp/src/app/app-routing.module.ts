import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotels/hotel-details.component';

const routes: Routes = [
    {path: 'hotels', component: HotelsComponent },
    {path: 'hotels/:id', component: HotelDetailsComponent },
    {path: 'home', component: HomeComponent },
    {path: 'orders/:id', component: OrdersComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}

