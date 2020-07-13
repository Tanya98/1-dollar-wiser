import { NgModule } from '@angular/core';
import { TermOfServiceComponent } from './term-of-service.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: TermOfServiceComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [TermOfServiceComponent],
    providers: [],
})
export class TermOfServiceModule { }
