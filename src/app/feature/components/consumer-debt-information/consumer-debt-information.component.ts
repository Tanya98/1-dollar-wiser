import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-consumer-debt-info',
    templateUrl: './consumer-debt-information.component.html',
    styleUrls: ['./consumer-debt-information.component.scss']
})

export class ConsumerDebtInformationComponent implements OnInit {
    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}