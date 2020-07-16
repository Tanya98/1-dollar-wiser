import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-budget-credit-counseling-faqs',
    templateUrl: './budget-credit-counseling-faqs.component.html',
    styleUrls: ['./budget-credit-counseling-faqs.component.scss']
})

export class BudgetCreditCounselingFaqsComponent implements OnInit {
    public summaryInfo: Object[] = [
        { text: "budget-credit-counseling-faqs.item1" },
        { text: "budget-credit-counseling-faqs.item2" },
        { text: "budget-credit-counseling-faqs.item3" },
        { text: "budget-credit-counseling-faqs.item4" },
        { text: "budget-credit-counseling-faqs.item5" },
        { text: "budget-credit-counseling-faqs.item6" },
        { text: "budget-credit-counseling-faqs.item7" },
        { text: "budget-credit-counseling-faqs.item8" },
        { text: "budget-credit-counseling-faqs.item9" }
    ];

    public requiredInfo: Object[] = [
        { text: "budget-credit-counseling-faqs.info1" },
        { text: "budget-credit-counseling-faqs.info2" },
        { text: "budget-credit-counseling-faqs.info3" },
        { text: "budget-credit-counseling-faqs.info4" },
        { text: "budget-credit-counseling-faqs.info5" },
        { text: "budget-credit-counseling-faqs.info6" },
    ];

    public considerationInfo: Object[] = [
        { text: "budget-credit-counseling-faqs.consideration-info1" },
        { text: "budget-credit-counseling-faqs.consideration-info2" },
        { text: "budget-credit-counseling-faqs.consideration-info3" },
    ];

    constructor() { }

    ngOnInit() { }
}