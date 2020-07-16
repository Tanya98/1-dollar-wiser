import { NgModule } from '@angular/core';
import { CreditLawsSummariesComponent } from './credit-laws-summaries.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbdNavVertical } from './ngb-nav/nav-vertical';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: '',
        component: CreditLawsSummariesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes),
        NgbModule
    ],
    exports: [],
    declarations: [
        CreditLawsSummariesComponent,
        NgbdNavVertical,
    ],
    providers: [],
})
export class CreditLawsSummariesModule { }
