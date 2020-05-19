import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { ILogin } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{

    constructor(private router: Router,
                private loginService: LoginService){}

    myUser = new ILogin('', '');

    loginUser(form: NgForm): void {
       this.loginService.loginUser(form.value)
       .subscribe((res) => this.loginService.getUserRole(res['token'])
       .subscribe((response) => this.userRole(response['role']))
       );
    }

    userRole(typeOfUser): void {
        localStorage.setItem('_1ux', typeOfUser);
        this.router.navigate(['/profile']);
    }
}
