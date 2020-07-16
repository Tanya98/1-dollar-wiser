import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RedirectService } from 'src/app/core/services/redirect.service';

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

    constructor(private translate: TranslateService, private service: RedirectService) { }

    ngOnInit() { }

    public register() {
        this.service.loginNow();
    }
}