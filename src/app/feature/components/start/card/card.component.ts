import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
    @Input() public cardHeaderTitle: string;
    @Input() public cardHeaderText: string;
    @Input() public cardPriceTitle: string;
    @Input() public cardItems: Object[];

    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}