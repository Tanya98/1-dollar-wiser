import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-debtor-education-faqs',
    templateUrl: './debtor-education-faqs.component.html',
    styleUrls: ['./debtor-education-faqs.component.scss']
})

export class DebtorEducationFaqsComponent implements OnInit {
    public summaryInfo: Object[] = [
        { text: "debtor-education-faqs.item1" },
        { text: "debtor-education-faqs.item2" },
        { text: "debtor-education-faqs.item3" },
        { text: "debtor-education-faqs.item4" },
        { text: "debtor-education-faqs.item5" },
        { text: "debtor-education-faqs.item6" },
        { text: "debtor-education-faqs.item7" },
        { text: "debtor-education-faqs.item8" },
        { text: "debtor-education-faqs.item9" }
    ];

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