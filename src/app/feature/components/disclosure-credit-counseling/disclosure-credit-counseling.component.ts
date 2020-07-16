import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-disclosure-credit-counseling',
    templateUrl: './disclosure-credit-counseling.component.html',
    styleUrls: ['./disclosure-credit-counseling.component.scss']
})

export class DisclosureCreditCounselingComponent implements OnInit {
    public infoSteps: Object[] = [
        { text: "disclosure-credit-counseling.info1" },
        { text: "disclosure-credit-counseling.info2" },
        { text: "disclosure-credit-counseling.info3" },
        { text: "disclosure-credit-counseling.info4" },
        { text: "disclosure-credit-counseling.info5" },
        { text: "disclosure-credit-counseling.info6" }
    ];

    public considerationInfo: Object[] = [
        { text: "disclosure-credit-counseling.item1" },
        { text: "disclosure-credit-counseling.item2" },
        { text: "disclosure-credit-counseling.item3" }
    ];
    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}