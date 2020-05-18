import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { ILogin } from './login.model';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{
    myUser = new ILogin('', '');

    loginUser(form: NgForm): void {

    }
}
