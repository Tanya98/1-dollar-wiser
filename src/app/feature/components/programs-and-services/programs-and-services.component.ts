import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-programs-and-services',
    templateUrl: './programs-and-services.component.html',
    styleUrls: ['./programs-and-services.component.scss']
})

export class ProgramsAndServicesComponent implements OnInit {
    constructor(private translate: TranslateService) { }

    ngOnInit() { }
}