import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './carousel.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
        TranslateModule
    ],
    declarations: [NgbdCarouselBasic],
    exports: [NgbdCarouselBasic],
    bootstrap: [NgbdCarouselBasic]
})
export class NgbdCarouselBasicModule { }