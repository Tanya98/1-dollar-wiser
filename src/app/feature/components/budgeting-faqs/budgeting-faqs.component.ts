import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    selector: 'app-budgeting-faqs',
    templateUrl: './budgeting-faqs.component.html',
    styleUrls: ['./budgeting-faqs.component.scss']
})

export class BudgetingFaqsComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion;
    panelOpenState = false;
    constructor() { }

    ngOnInit() { }
}