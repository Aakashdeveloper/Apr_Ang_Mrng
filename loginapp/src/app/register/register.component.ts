import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { IRegister } from './register.modal';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent{

    myUser = new IRegister('', '', '');

    registerUser(form: NgForm): void {

    }

}
