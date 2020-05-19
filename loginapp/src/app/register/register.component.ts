import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { IRegister } from './register.modal';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent{

    constructor(private router: Router,
                private registerService: RegisterService){}

    myUser = new IRegister('', '', '');

    registerUser(form: NgForm): void {
        this.registerService.RegisterUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']));
    }

}
