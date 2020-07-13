import { NgModule } from '@angular/core';
import { DebtorEducationFaqsComponent } from './debtor-education-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: DebtorEducationFaqsComponent
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
    declarations: [DebtorEducationFaqsComponent],
    providers: [],
})
export class DebtorEducationFaqsModule { }
