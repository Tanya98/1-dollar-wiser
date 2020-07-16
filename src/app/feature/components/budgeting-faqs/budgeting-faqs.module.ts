import { NgModule } from '@angular/core';
import { BudgetingFaqsComponent } from './budgeting-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: BudgetingFaqsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes),
        MaterialModule
    ],
    exports: [
    ],
    declarations: [
        BudgetingFaqsComponent,
    ],
    providers: [],
})
export class BudgetingFaqsModule { }
