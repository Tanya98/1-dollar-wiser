import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent implements OnInit {

    @Input() public title: string;

    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}