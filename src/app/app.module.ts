import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { StartPageComponent } from './feature/components/start/start-page.component';
import { NgbdCarouselBasicModule } from './feature/components/start/carousel/carousel.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './feature/components/start/card/card.component';
import { RegistrationHelpModule } from './feature/components/registration-help/registration-help.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

export function HttpLoaderFactory(http: HttpClient) {
    if (!isDevMode()) {
      return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    } else {
      return new TranslateHttpLoader(http, 'assets/i18n/');
    }
  }

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
    HttpClientModule,
    SharedModule,
    NgbdCarouselBasicModule,
    RegistrationHelpModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
