import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(private translate: TranslateService, private service: RedirectService) { }

    ngOnInit() { }

    public login() {
        this.service.loginNow();
    }
}