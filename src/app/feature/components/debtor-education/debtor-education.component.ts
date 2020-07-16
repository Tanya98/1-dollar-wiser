import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-debtor-education',
    templateUrl: './debtor-education.component.html',
    styleUrls: ['./debtor-education.component.scss']
})

export class DebtorEducationComponent implements OnInit {

    public infoBeforeCourses: Object[] = [
        { text: "debtor-education.item1" },
        { text: "debtor-education.item2" },
        { text: "debtor-education.item3" },
        { text: "debtor-education.item4" },
        { text: "debtor-education.item5" },
        { text: "debtor-education.item6" },
        { text: "debtor-education.item7" }
    ];

    public processInfo: Object[] = [
        { text: "debtor-education.info" },
        { text: "debtor-education.info1" },
        { text: "debtor-education.info2" },
        { text: "debtor-education.info3" },
        { text: "debtor-education.info4" },
        { text: "debtor-education.info5" },
        { text: "debtor-education.info6" },
        { text: "debtor-education.info7" },
        { text: "debtor-education.info8" },
    ]
    constructor() { }

    ngOnInit() { }
}