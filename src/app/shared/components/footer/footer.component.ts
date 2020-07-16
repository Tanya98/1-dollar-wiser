import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

   public privacyPolicyRedirect() {
        this.router.navigate(['content/privacy-policy']);
        window.scrollTo(0, 0);
    }

    public aboutRedirect() {
        this.router.navigate(['content/about-1-wiser-consumer-education-inc']);
        window.scrollTo(0, 0);
    }

    public contactUsedirect() {
        this.router.navigate(['contact-us']);
        window.scrollTo(0, 0);
    }

    public termsOfServiceRedirect() {
        this.router.navigate(['terms-service']);
        window.scrollTo(0, 0);
    }
}