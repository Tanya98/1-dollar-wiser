import { NgModule } from '@angular/core';
import { DisclosureCreditCounselingComponent } from './disclosure-credit-counseling.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: DisclosureCreditCounselingComponent
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
    declarations: [DisclosureCreditCounselingComponent],
    providers: [],
})
export class DisclosureCreditCounselingModule { }
