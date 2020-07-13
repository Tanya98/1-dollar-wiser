import { NgModule } from '@angular/core';
import { BudgetCreditCounselingFaqsComponent } from './budget-credit-counseling-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: BudgetCreditCounselingFaqsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [BudgetCreditCounselingFaqsComponent],
    providers: [],
})
export class BudgetCreditCounselingFaqsModule { }
