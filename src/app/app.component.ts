import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public loading: boolean = true;
    constructor(private translate: TranslateService, private router: Router) {
        translate.addLangs(['en']);
        translate.setDefaultLang('en');
        translate.use('en');

        // this.router.events.subscribe((e: RouterEvent) => {
        //     this.navigationInterceptor(e);
        // });
    }

    // navigationInterceptor(event: RouterEvent): void {
    //     if (event instanceof NavigationStart) {
    //         this.loading = true
    //     }
    //     if (event instanceof NavigationEnd) {
    //         this.loading = false
    //     }

    //     // if (event instanceof NavigationCancel) {
    //     //     this.loading = false
    //     // }
    //     // if (event instanceof NavigationError) {
    //     //     this.loading = false
    //     // }
    // }
}
