import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({ 
    selector: 'ngbd-carousel-basic', 
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
 })
export class NgbdCarouselBasic {
    constructor(private translate: TranslateService) {}
}
