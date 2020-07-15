import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-debtor-education-faqs',
    templateUrl: './debtor-education-faqs.component.html',
    styleUrls: ['./debtor-education-faqs.component.scss']
})

export class DebtorEducationFaqsComponent implements OnInit {
    public requiredInfo: Object[] = [
        { text: "debtor-education-faqs.info" },
        { text: "debtor-education-faqs.info2" },
        { text: "debtor-education-faqs.info3" },
        { text: "debtor-education-faqs.info4" },
        { text: "debtor-education-faqs.info5" },
        { text: "debtor-education-faqs.info6" },
    ];

    public considerationInfo: Object[] = [
        { text: "debtor-education-faqs.consideration-info1" },
        { text: "debtor-education-faqs.consideration-info2" },
        { text: "debtor-education-faqs.consideration-info3" },
    ];

    constructor() { }

    ngOnInit() { }
}