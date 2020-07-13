import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-term-of-service',
    templateUrl: './term-of-service.component.html',
    styleUrls: ['./term-of-service.component.scss']
})

export class TermOfServiceComponent implements OnInit {
    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}