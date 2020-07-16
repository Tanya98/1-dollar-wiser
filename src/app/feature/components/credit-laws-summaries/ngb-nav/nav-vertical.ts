import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-nav-vertical',
    templateUrl: './nav-vertical.html',
    styleUrls: ['./nav-vertical.scss']
})
export class NgbdNavVertical {
    active = 'top';

    public tab1List: Object[] = [
        { text: "credit-laws-summaries.tab1.item1" },
        { text: "credit-laws-summaries.tab1.item2" },
        { text: "credit-laws-summaries.tab1.item3" },
        { text: "credit-laws-summaries.tab1.item4" },
        { text: "credit-laws-summaries.tab1.item5" },
        { text: "credit-laws-summaries.tab1.item6" },
        { text: "credit-laws-summaries.tab1.item7" },
        { text: "credit-laws-summaries.tab1.item8" },
        { text: "credit-laws-summaries.tab1.item9" },
        { text: "credit-laws-summaries.tab1.item10" },
        { text: "credit-laws-summaries.tab1.item11" }
    ];

    public tab2List: Object[] = [
        { text: "credit-laws-summaries.tab2.item1" },
        { text: "credit-laws-summaries.tab2.item2" },
        { text: "credit-laws-summaries.tab2.item3" },
        { text: "credit-laws-summaries.tab2.item4" },
        { text: "credit-laws-summaries.tab2.item5" },
        { text: "credit-laws-summaries.tab2.item6" },
        { text: "credit-laws-summaries.tab2.item7" },
        { text: "credit-laws-summaries.tab2.item8" }
    ];

    public tab3List: Object[] = [
        { text: "credit-laws-summaries.tab3.item1" },
        { text: "credit-laws-summaries.tab3.item2" },
        { text: "credit-laws-summaries.tab3.item3" },
        { text: "credit-laws-summaries.tab3.item4" },
        { text: "credit-laws-summaries.tab3.item5" },
        { text: "credit-laws-summaries.tab3.item6" },
    ];

    public tab4List: Object[] = [
        { text: "credit-laws-summaries.tab4.item1" },
        { text: "credit-laws-summaries.tab4.item2" },
        { text: "credit-laws-summaries.tab4.item3" }
    ];

    public tab5FirstList: Object[] = [
        { text: "credit-laws-summaries.tab5.item1" },
        { text: "credit-laws-summaries.tab5.item2" },
        { text: "credit-laws-summaries.tab5.item3" }
    ];

    public tab5SeconsList: Object[] = [
        { text: "credit-laws-summaries.tab5.item4" },
        { text: "credit-laws-summaries.tab5.item5" },
        { text: "credit-laws-summaries.tab5.item6" },
        { text: "credit-laws-summaries.tab5.item7" },
        { text: "credit-laws-summaries.tab5.item8" },
    ];

    public tab6FirstList: Object[] = [
        { text: "credit-laws-summaries.tab6.item1" },
        { text: "credit-laws-summaries.tab6.item2" },
        { text: "credit-laws-summaries.tab6.item3" }
    ];

    public tab6SecondList: Object[] = [
        { text: "credit-laws-summaries.tab6.item4" },
        { text: "credit-laws-summaries.tab6.item5" },
        { text: "credit-laws-summaries.tab6.item6" }
    ];

    public tab7FirstList: Object[] = [
        { text: "credit-laws-summaries.tab7.item1" },
        { text: "credit-laws-summaries.tab7.item2" },
        { text: "credit-laws-summaries.tab7.item3" },
        { text: "credit-laws-summaries.tab7.item4" },
        { text: "credit-laws-summaries.tab7.item5" },
        { text: "credit-laws-summaries.tab7.item6" },
        { text: "credit-laws-summaries.tab7.item7" }
    ];

    public tab7SecondList: Object[] = [
        { text: "credit-laws-summaries.tab7.item8" },
        { text: "credit-laws-summaries.tab7.item9" },
    ];

    public tab8List: Object[] = [
        { text: "credit-laws-summaries.tab8.item1" },
        { text: "credit-laws-summaries.tab8.item2" },
        { text: "credit-laws-summaries.tab8.item3" },
        { text: "credit-laws-summaries.tab8.item4" },
        { text: "credit-laws-summaries.tab8.item5" },
        { text: "credit-laws-summaries.tab8.item6" },
        { text: "credit-laws-summaries.tab8.item7" },
        { text: "credit-laws-summaries.tab8.item8" },
        { text: "credit-laws-summaries.tab8.item9" },
        { text: "credit-laws-summaries.tab8.item10" },
        { text: "credit-laws-summaries.tab8.item11" },
        { text: "credit-laws-summaries.tab8.item12" },
    ];

    public tab9List: Object[] = [
        { text: "credit-laws-summaries.tab9.item1" },
        { text: "credit-laws-summaries.tab9.item2" },
        { text: "credit-laws-summaries.tab9.item3" },
        { text: "credit-laws-summaries.tab9.item4" },
        { text: "credit-laws-summaries.tab9.item5" }
    ];

    public tab10List: Object[] = [
        { text: "credit-laws-summaries.tab10.item1" },
        { text: "credit-laws-summaries.tab10.item2" },
        { text: "credit-laws-summaries.tab10.item3" },
        { text: "credit-laws-summaries.tab10.item4" },
        { text: "credit-laws-summaries.tab10.item5" }
    ];

    public tab11List: Object[] = [
        { text: "credit-laws-summaries.tab11.item1" },
        { text: "credit-laws-summaries.tab11.item2" },
        { text: "credit-laws-summaries.tab11.item3" },
        { text: "credit-laws-summaries.tab11.item4" },
        { text: "credit-laws-summaries.tab11.item5" },
        { text: "credit-laws-summaries.tab11.item6" }
    ];

    public tab12FirstList: Object[] = [
        { text: "credit-laws-summaries.tab12.item1" },
        { text: "credit-laws-summaries.tab12.item2" },
        { text: "credit-laws-summaries.tab12.item3" },
        { text: "credit-laws-summaries.tab12.item4" }
    ];

    public tab12SecondList: Object[] = [
        { text: "credit-laws-summaries.tab12.item1" },
        { text: "credit-laws-summaries.tab12.item2" },
        { text: "credit-laws-summaries.tab12.item3" },
        { text: "credit-laws-summaries.tab12.item4" },
        { text: "credit-laws-summaries.tab12.item5" },
    ];

    public tab13FirstList: Object[] = [
        { text: "credit-laws-summaries.tab13.item1" },
        { text: "credit-laws-summaries.tab13.item2" },
        { text: "credit-laws-summaries.tab13.item3" }
    ];

    public tab13SecondList: Object[] = [
        { text: "credit-laws-summaries.tab13.item1" },
        { text: "credit-laws-summaries.tab13.item2" },
        { text: "credit-laws-summaries.tab13.item3" }
    ];

    public tab13ThirdList: Object[] = [
        { text: "credit-laws-summaries.tab13.item1" },
        { text: "credit-laws-summaries.tab13.item2" },
        { text: "credit-laws-summaries.tab13.item3" },
        { text: "credit-laws-summaries.tab13.item4" },
        { text: "credit-laws-summaries.tab13.item5" }
    ];

    trackBy(index, item) {
        return index;
    }
}