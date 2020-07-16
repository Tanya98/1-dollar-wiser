import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
    selector: 'app-disaster-survivors-tool-kit',
    templateUrl: './disaster-survivors-tool-kit.component.html',
    styleUrls: ['./disaster-survivors-tool-kit.component.scss']
})

export class DisasterSurvivorsToolkitComponent implements OnInit {
    constructor(private service: RedirectService) { }

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

    public agreementList: Object[] = [
        { text: "credit-debt.vehicles" },
        { text: "credit-debt.appliances" },
        { text: "credit-debt.furniture" },
        { text: "credit-debt.electronics" },
    ];

    public requestList: Object[] = [
        { text: "credit-debt.interest-rate-adjustment" },
        { text: "credit-debt.late-payment-penalty" },
        { text: "credit-debt.hardship-payment-deferral" },
    ];

    public documentationList: Object[] = [
        { text: "credit-debt.fema" },
        { text: "credit-debt.termination-notice" },
        { text: "credit-debt.unemployment-benefit-statement" },
        { text: "credit-debt.disability-benefit-statement" },
        { text: "credit-debt.food-stamp-statement" },
        { text: "credit-debt.current-bank-statements" },
        { text: "credit-debt.ssa-ssdi" },
        { text: "credit-debt.hospital-madical-bill" },
        { text: "credit-debt.list-of-residents" },
        { text: "credit-debt.tax-return" },
        { text: "credit-debt.w-2" }
    ];

    public followingList: Object[] = [
        { text: "credit-debt.stop-credit-card" },
        { text: "credit-debt.stop-payday-loans" },
        { text: "credit-debt.stop-title-loans" }
    ];

    public negotiatingFollowingInfo: Object[] = [
        { text: "credit-debt.credit-card" },
        { text: "credit-debt.your-account-number" },
        { text: "credit-debt.your-name" },
        { text: "credit-debt.specific-detailed" },
        { text: "credit-debt.your-desired-outcome" }
    ];

    public typesInfo: Object[] = [
        { text: "security-freeze-basics.your-full-name" },
        { text: "security-freeze-basics.social-security-number" },
        { text: "security-freeze-basics.date-of-birth" },
        { text: "security-freeze-basics.current-address" },
        { text: "security-freeze-basics.all-addresses" },
        { text: "security-freeze-basics.email-address" },
        { text: "security-freeze-basics.government-issued" },
        { text: "security-freeze-basics.FEMA" },
        { text: "security-freeze-basics.utility-bill" }
    ];

    public firstBudgetInfo: Object[] = [
        { text: "create-written-budget.clean-up-and-repair" },
        { text: "create-written-budget.clear-out-relocate" },
        { text: "create-written-budget.walk-away-forget" },
        { text: "create-written-budget.other" },
    ];

    public secondBudgetInfo: Object[] = [
        { text: "create-written-budget.insurance-money" },
        { text: "create-written-budget.your-place-residence-changes" },
        { text: "create-written-budget.number-of-people" },
        { text: "create-written-budget.employment-income-changes" },
    ];
    ngOnInit() { }

    public register() {
        this.service.loginNow();
    }
}