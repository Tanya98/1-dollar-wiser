import { NgModule } from '@angular/core';
import { CreditCounselingCourseComponent } from './credit-counseling-course.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CreditCounselingCourseComponent
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
    declarations: [CreditCounselingCourseComponent],
    providers: [],
})
export class CreditCounselingCourseModule { }
