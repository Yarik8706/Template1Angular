import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { RewiesSliderComponent } from './rewies-slider/rewies-slider.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import {BootstrapIconsModule} from "ng-bootstrap-icons";
import {allIcons} from "ng-bootstrap-icons/icons";
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    AboutUsComponent,
    MainComponent,
    RewiesSliderComponent,
    WhoWeAreComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapIconsModule.pick(allIcons)
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
