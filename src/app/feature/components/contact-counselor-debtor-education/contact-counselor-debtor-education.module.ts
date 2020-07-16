import { NgModule } from '@angular/core';
import { ContactCounselorDebtorEducationComponent } from './contact-counselor-debtor-education.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: ContactCounselorDebtorEducationComponent
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
    declarations: [ContactCounselorDebtorEducationComponent],
    providers: [],
})
export class ContactCounselorDebtorEducationModule { }
