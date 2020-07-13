import { NgModule } from '@angular/core';
import { ConsumerDebtInformationComponent } from './consumer-debt-information.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: ConsumerDebtInformationComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        TranslateModule
    ],
    exports: [],
    declarations: [ConsumerDebtInformationComponent],
    providers: [],
})
export class ConsumerDebtInformationModule { }
