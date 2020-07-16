import { NgModule } from '@angular/core';
import { BudgetCreditGlossaryComponent } from './budget-credit-glossary.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: BudgetCreditGlossaryComponent
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
    declarations: [BudgetCreditGlossaryComponent],
    providers: [],
})
export class BudgetCreditGlossaryModule { }
