import { NgModule } from '@angular/core';
import { DisasterSurvivorsToolkitComponent } from './disaster-survivors-tool-kit.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: DisasterSurvivorsToolkitComponent
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
    declarations: [DisasterSurvivorsToolkitComponent],
    providers: [],
})
export class DisasterSurvivorsToolkitModule { }
