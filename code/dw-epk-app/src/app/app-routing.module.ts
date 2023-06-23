// 3rd-party imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { HomePageComponent } from './home-page/home-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { UpcomingShowsPageComponent } from './upcoming-shows-page/upcoming-shows-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

/**
 * Don't forget to update the navbar when adding a page! (unless it's supposed to be hidden)
 */
const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'music', component: MusicPageComponent},
  {path: 'shows', component: UpcomingShowsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
