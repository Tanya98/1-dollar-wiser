import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-consumer-resources',
    templateUrl: './consumer-resources.component.html',
    styleUrls: ['./consumer-resources.component.scss']
})

export class ConsumerResourcesComponent implements OnInit {
    public list: Object[] = [
        { text: "consumer-resources.tab3.item1" },
        { text: "consumer-resources.tab3.item2" },
        { text: "consumer-resources.tab3.item3" },
        { text: "consumer-resources.tab3.item4" },
        { text: "consumer-resources.tab3.item5" },
        { text: "consumer-resources.tab3.item6" },
        { text: "consumer-resources.tab3.item7" },
        { text: "consumer-resources.tab3.item8" },
        { text: "consumer-resources.tab3.item9" }
    ];

    constructor() { }

    ngOnInit() { }
}