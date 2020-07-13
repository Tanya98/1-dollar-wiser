import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsAndServicesComponent } from './programs-and-services.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: ProgramsAndServicesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [ProgramsAndServicesComponent],
    providers: [],
})
export class ProgramsAndServicesModule { }
