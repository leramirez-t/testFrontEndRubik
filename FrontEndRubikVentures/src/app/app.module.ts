import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { LuispicturesComponent } from './pages/luispictures/luispictures.component';

import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { CasandrapicturesComponent } from './pages/casandrapictures/casandrapictures.component';
import { JoepicturesComponent } from './pages/joepictures/joepictures.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    FooterComponent,
    AboutComponent,
    LuispicturesComponent,
    CasandrapicturesComponent,
    JoepicturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
