import { NgModule } from '@angular/core';
import { DebtorEducationDisclosureComponent } from './debtor-education-disclosure.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: DebtorEducationDisclosureComponent
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
    declarations: [DebtorEducationDisclosureComponent],
    providers: [],
})
export class DebtorEducationDisclosureModule { }
