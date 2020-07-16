import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationHelpComponent } from './registration-help.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
    {
        path: '',
        component: RegistrationHelpComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        TranslateModule
    ],
    exports: [RouterModule],
    declarations: [
        RegistrationHelpComponent
    ],
    providers: [],
})
export class RegistrationHelpModule { }
