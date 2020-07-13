import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-disaster-survivors-tool-kit',
    templateUrl: './disaster-survivors-tool-kit.component.html',
    styleUrls: ['./disaster-survivors-tool-kit.component.scss']
})

export class DisasterSurvivorsToolkitComponent implements OnInit {
    public list: Object[] = [
        { text: "disaster-survivors-tool-kit.item1" },
        { text: "disaster-survivors-tool-kit.item2" },
        { text: "disaster-survivors-tool-kit.item3" },
    ];

    public businessServicesList: Object[] = [
        { text: "disaster-survivors-tool-kit.newspapers" },
        { text: "disaster-survivors-tool-kit.medical-supplies" },
        { text: "disaster-survivors-tool-kit.water" },
        { text: "disaster-survivors-tool-kit.propane" },
        { text: "disaster-survivors-tool-kit.insect-pest-control" },
        { text: "disaster-survivors-tool-kit.pool-maintenance" },
        { text: "disaster-survivors-tool-kit.yard-maintenance" },
        { text: "disaster-survivors-tool-kit.feed" },
        { text: "disaster-survivors-tool-kit.food" },
        { text: "disaster-survivors-tool-kit.Etc" },
    ];

    constructor() { }

    ngOnInit() { }
}