import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { SurveryComponent } from './survey/survery.component';

const routes: Routes = [
    {path: 'form', component: SurveryComponent },
    {path: '', redirectTo: 'form', pathMatch: 'full' },
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

