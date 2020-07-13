import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: PrivacyPolicyComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        TranslateModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [PrivacyPolicyComponent],
    providers: [],
})
export class PrivacyPolicyModule { }
