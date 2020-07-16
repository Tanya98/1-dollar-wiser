import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetCreditCounselingComponent } from './budget-credit-counseling.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: BudgetCreditCounselingComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [BudgetCreditCounselingComponent],
    providers: [],
})
export class BudgetCreditCounselingModule { }
