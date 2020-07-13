import { NgModule } from '@angular/core';
import { NegotiatingCreditorsComponent } from './negotiating-creditors.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: NegotiatingCreditorsComponent
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
    declarations: [NegotiatingCreditorsComponent],
    providers: [],
})
export class NegotiatingCreditorsModule { }
