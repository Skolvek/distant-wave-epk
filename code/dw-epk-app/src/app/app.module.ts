// 3rd-party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Local imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { UpcomingShowsPageComponent } from './upcoming-shows-page/upcoming-shows-page.component';
import { UpcomingShowCardComponent } from './upcoming-show-card/upcoming-show-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    NavigationToolbarComponent,
    MusicPageComponent,
    SiteFooterComponent,
    UpcomingShowsPageComponent,
    UpcomingShowCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
