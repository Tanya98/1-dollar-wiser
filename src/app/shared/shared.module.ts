import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        MenuComponent,
        MainHeaderComponent,
        ContactFormComponent,
        TranslateModule
    ],
    declarations: [
       HeaderComponent,
       MenuComponent,
       MainHeaderComponent,
       ContactFormComponent
    ],
    providers: [],
})
export class SharedModule { }
