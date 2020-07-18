import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-budget-credit-counseling',
    templateUrl: './budget-credit-counseling.component.html',
    styleUrls: ['./budget-credit-counseling.component.scss']

})

export class BudgetCreditCounselingComponent implements OnInit {

    public budgetCreditCounseling: Object[] = [
        { text: "budget-credit-counseling.item" },
        { text: "budget-credit-counseling.item2" },
        { text: "budget-credit-counseling.item3" },
        { text: "budget-credit-counseling.item4" },
        { text: "budget-credit-counseling.item5" },
        { text: "budget-credit-counseling.item6" },
        { text: "budget-credit-counseling.item7" },
        { text: "budget-credit-counseling.item8" },
        { text: "budget-credit-counseling.item9" },
        { text: "budget-credit-counseling.item10" },
        { text: "budget-credit-counseling.item11" },
        { text: "budget-credit-counseling.item12" },
        { text: "budget-credit-counseling.item13" }
    ];

    public processInfo: Object[] = [
        { text: "budget-credit-counseling.info" },
        { text: "budget-credit-counseling.info2" },
        { text: "budget-credit-counseling.info3" },
        { text: "budget-credit-counseling.info4" },
        { text: "budget-credit-counseling.info5" },
        { text: "budget-credit-counseling.info6" },
        { text: "budget-credit-counseling.info7" },
        { text: "budget-credit-counseling.info8" },
    ]

    constructor() { }

    ngOnInit() { }
}