import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{
    path: '',
    component: ContactUsComponent
}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [ContactUsComponent],
    providers: [],
})
export class ContactUsModule { }
