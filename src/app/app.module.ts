import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideButtonComponent } from './components/atoms/side-button/side-button.component';
import { CollapseButtonComponent } from './components/atoms/collapse-button/collapse-button.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { SwitcherComponent } from './components/molecules/switcher/switcher.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { SideupperComponent } from './components/molecules/sideupper/sideupper.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { SwitchComponent } from './components/atoms/switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SideButtonComponent,
    CollapseButtonComponent,
    LogoComponent,
    SwitcherComponent,
    ImageComponent,
    SideupperComponent,
    SidebarComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
