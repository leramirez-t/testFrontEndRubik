import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { LuispicturesComponent } from './pages/luispictures/luispictures.component';
import { CasandrapicturesComponent } from './pages/casandrapictures/casandrapictures.component';
import { JoepicturesComponent } from './pages/joepictures/joepictures.component';

const app_routes: Routes = [
  { path: 'api/login', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'album/luis', component: LuispicturesComponent },
  { path: 'album/casandra', component: CasandrapicturesComponent },
  { path: 'album/joe', component: JoepicturesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
