import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { QuantidadeComponent } from './quantidade/quantidade.component';
import { ComoUsarComponent } from './como-usar/como-usar.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DownloadComponent } from './download/download.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroducaoComponent,
    QuantidadeComponent,
    ComoUsarComponent,
    FeedbacksComponent,
    DownloadComponent,
    BottombarComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
