import {Component, OnInit} from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
    userinfo;

    constructor(private router: Router,
                private profileService: ProfileService){}

    ngOnInit(): void {
        this.profileService.getUserInfo()
            .subscribe((data) => this.userinfo = data);
    }

    logout(): void{
        localStorage.removeItem('_0yy');
        localStorage.removeItem('_1ux');
        this.router.navigate(['/login']);
    }

}
