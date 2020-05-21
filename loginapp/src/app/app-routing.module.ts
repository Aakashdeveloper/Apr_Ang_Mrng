import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileGaurdService } from './profile-gaurd.service';
import { RoleGaurdService } from './role-gaurd.service';

const routes: Routes = [
    {path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent },
    {path: 'profile', canActivate: [ProfileGaurdService], component: ProfileComponent },
    {path: 'admin', canActivate: [RoleGaurdService],  component: AdminComponent },
    {path: '', redirectTo: 'register', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [ProfileGaurdService , RoleGaurdService],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}

