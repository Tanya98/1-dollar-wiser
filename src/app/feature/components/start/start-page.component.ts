import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})

export class StartPageComponent implements OnInit {

    public budgetCreditItems: Object[] = [
        { item: "card.budget-credit-first-item" },
        { item: "card.budget-credit-second-item" },
        { item: "card.bidget-credit-third-item" },
    ];
    public debtorEducationItems: Object[] = [
        { item: "card.debtor-education-first-item" },
        { item: "card.debtor-education-second-item" },
        { item: "card.debtor-education-third-item" },
    ];

    constructor(private translate: TranslateService) { }

    ngOnInit() { }

    public open() {
        window.open('https://www.1dollarwiser.com/sites/default/files/Disaster%20Survivor%27s%20Toolkit.pdf', '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=yes,scrollbars=no,dependent=no'); return false;
    }
}