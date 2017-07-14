import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Session} from "../util/session";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (Session.get(state.url) || Session.get('loading')) {
            return true;
        }

        this.router.navigateByUrl('/')
            .then((success: any) => console.log('Access denied'))
            .catch((err: any) => console.error(err));
        return false;
    }
}