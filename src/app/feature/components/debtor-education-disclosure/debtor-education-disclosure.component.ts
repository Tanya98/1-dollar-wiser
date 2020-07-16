import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-debtor-education-disclosure',
    templateUrl: './debtor-education-disclosure.component.html',
    styleUrls: ['./debtor-education-disclosure.component.scss']
})

export class DebtorEducationDisclosureComponent implements OnInit {

    public requiredInfo: Object[] = [
        { text: "debtor-education-disclosure.item1" },
        { text: "debtor-education-disclosure.item2" },
        { text: "debtor-education-disclosure.item3" },
        { text: "debtor-education-disclosure.item4" },
        { text: "debtor-education-disclosure.item5" },
        { text: "debtor-education-disclosure.item6" },
    ];

    public considerationInfo: Object[] = [
        { text: "debtor-education-disclosure.info1" },
        { text: "debtor-education-disclosure.info2" },
        { text: "debtor-education-disclosure.info3" },
    ];

    constructor() { }

    ngOnInit() { }
}