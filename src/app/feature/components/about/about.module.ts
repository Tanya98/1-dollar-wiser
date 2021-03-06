import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
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
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
