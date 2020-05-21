import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()

export class RoleGaurdService implements CanActivate{
    token: string;
    role: string;

    constructor(private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot): boolean{
        this.token = localStorage.getItem('_0yy');
        this.role = localStorage.getItem('_1ux');
        if (this.token === null){
            this.router.navigate(['/login']);
            return false;
        }
        if (this.token !== null && this.role !== 'admin'){
            this.router.navigate(['/profile']);
            return false;
        }
        if (this.token !== null && this.role === 'admin'){
            return true;
        }

        return true;
    }

}
