import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-negotiating-creditors',
    templateUrl: './negotiating-creditors.component.html',
    styleUrls: ['./negotiating-creditors.component.scss']
})

export class NegotiatingCreditorsComponent implements OnInit {
    public documentationInfo: Object[] = [
        { text: "negotiating-creditors.item1" },
        { text: "negotiating-creditors.item2" },
        { text: "negotiating-creditors.item3" },
        { text: "negotiating-creditors.item4" },
        { text: "negotiating-creditors.item5" },
        { text: "negotiating-creditors.item6" },
        { text: "negotiating-creditors.item7" },
        { text: "negotiating-creditors.item8" },
        { text: "negotiating-creditors.item9" },
        { text: "negotiating-creditors.item10" },
        { text: "negotiating-creditors.item11" },
        { text: "negotiating-creditors.item12" },
    ];

    public negotiatingInfo: Object[] = [
        { text: "negotiating-creditors.item13" },
        { text: "negotiating-creditors.item14" },
        { text: "negotiating-creditors.item15" },
    ];

    public planInfo: Object[] = [
        { text: "negotiating-creditors.item16" },
        { text: "negotiating-creditors.item17" },
        { text: "negotiating-creditors.item18" },
        { text: "negotiating-creditors.item19" },
    ];

    constructor() { }

    ngOnInit() { }
}