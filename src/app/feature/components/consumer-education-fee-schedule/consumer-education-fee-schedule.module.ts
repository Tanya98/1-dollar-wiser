import { NgModule } from '@angular/core';
import { ConsumerEducationFeeScheduleComponent } from './consumer-education-fee-schedule.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ConsumerEducationFeeScheduleComponent
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
    declarations: [ConsumerEducationFeeScheduleComponent],
    providers: [],
})
export class ConsumerEducationFeeScheduleModule { }
