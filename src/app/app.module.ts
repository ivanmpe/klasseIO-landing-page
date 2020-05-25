import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DownloadComponent } from './download/download.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroducaoComponent,
    SobreComponent,
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
