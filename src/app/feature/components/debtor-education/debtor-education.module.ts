import { NgModule } from '@angular/core';

import { DebtorEducationComponent } from './debtor-education.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: DebtorEducationComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [DebtorEducationComponent],
    providers: [],
})
export class DebtorEducationModule { }
