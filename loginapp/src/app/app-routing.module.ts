import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {path: 'regsiter', component: RegisterComponent },
    {path: 'login', component: LoginComponent },
    {path: 'profile', component: ProfileComponent },
    {path: 'admin', component: AdminComponent },
    {path: '', redirectTo: 'regsiter', pathMatch: 'full' },
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

