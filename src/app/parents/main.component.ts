import { Router } from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class MainComponent {

    constructor(private router: Router){}

    go(path: any) {
        this.router.navigate(['/' + path, { outlets: { main: '', nav: '', footer: '' }}])
            .then((success: any) => console.log('Go to ' + path))
            .catch((err: any) => console.error(err));
    }

    go_prev(path: any) {
        this.router.navigate(['/' + path, { outlets: { main: '', nav: '', footer: '' }}])
            .then((success: any) => console.log('Go to ' + path))
            .catch((err: any) => console.error(err));
    }

    go_next(path: any) {
        let url = this.router.createUrlTree(['/' + path, { outlets: { main: [''], nav: [''], footer: [''] }}]);
        this.router.navigateByUrl(url)
            .then((success: any) => console.log('Go to ' + path))
            .catch((err: any) => console.error(err));
    }
}