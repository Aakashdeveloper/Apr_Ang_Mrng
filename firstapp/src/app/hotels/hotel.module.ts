import { NgModule} from '@angular/core';
import { HotelsComponent } from './hotels.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearch } from './productSearch.pipe';
import { HotelDetailsComponent } from './hotel-details.component';
import { HotelsService } from './hotels.service';
import { StarComponent } from '../shared/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule

    ],
    declarations: [
        HotelsComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        HotelDetailsComponent

    ],
    providers: [
        HotelsService,
    ]
})

export class HotelModule {

}
