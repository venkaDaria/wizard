import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

export class UserToken {
}

export class Permissions {
    canActivate(user: UserToken, id: string): boolean {
        return true;
    }
}

@Injectable()
export class CanActivateTeam implements CanActivate {
    constructor(private permissions: Permissions, private currentUser: UserToken) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.permissions.canActivate(this.currentUser, route.params.id);
    }
}
