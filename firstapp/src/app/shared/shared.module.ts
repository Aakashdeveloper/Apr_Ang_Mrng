import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import { StarComponent } from './star.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        AppRoutingModule,
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        FormsModule,
        AppRoutingModule,
        StarComponent
    ]

})

export class SharedModule {

}
