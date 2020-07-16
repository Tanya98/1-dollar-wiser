import { NgModule } from '@angular/core';
import { ContactCounselorComponent } from './contact-counselor.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ContactCounselorComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ContactCounselorComponent],
    providers: [],
})
export class ContactCounselorModule { }
