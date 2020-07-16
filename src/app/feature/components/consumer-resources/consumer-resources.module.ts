import { NgModule } from '@angular/core';
import { ConsumerResourcesComponent } from './consumer-resources.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: ConsumerResourcesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ConsumerResourcesComponent],
    providers: [],
})
export class ConsumerResourcesModule { }
