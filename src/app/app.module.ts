import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './projects/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './Abilities/skills.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    SkillsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
