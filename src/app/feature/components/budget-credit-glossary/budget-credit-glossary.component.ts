import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-budget-credit-glossary',
    templateUrl: './budget-credit-glossary.component.html',
    styleUrls: ['./budget-credit-glossary.component.scss']
})

export class BudgetCreditGlossaryComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    sctoll(el: HTMLElement) {
        el.scrollIntoView();
    }
}