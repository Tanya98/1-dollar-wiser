import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
    selector: 'ngbd-carousel-basic',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class NgbdCarouselBasic {
    constructor(private translate: TranslateService, private service: RedirectService) { }

    public register() {
        this.service.loginNow();
    }
}
