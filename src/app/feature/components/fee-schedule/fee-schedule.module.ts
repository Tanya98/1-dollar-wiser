import { NgModule } from '@angular/core';
import { FeeScheduleComponent } from './fee-schedule.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: FeeScheduleComponent
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
    declarations: [FeeScheduleComponent],
    providers: [],
})
export class FeeScheduleModule { }
