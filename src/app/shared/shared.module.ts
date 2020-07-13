import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MaterialModule
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        MenuComponent,
        MainHeaderComponent,
    ],
    declarations: [
       HeaderComponent,
       MenuComponent,
       MainHeaderComponent
    ],
    providers: [],
})
export class SharedModule { }
