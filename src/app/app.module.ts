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
import { HeaderComponent } from './components/organisms/header/header.component';
import { DashboardComponent } from './components/organisms/dashboard/dashboard.component';
import { CardListComponent } from './components/molecules/card-list/card-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataWindowComponent } from './components/molecules/data-window/data-window.component';
import { BarWindowComponent } from './components/atoms/bar-window/bar-window.component';
import { LineWindowComponent } from './components/atoms/line-window/line-window.component';
import { ActivityWindowComponent } from './components/atoms/activity-window/activity-window.component';
import { DonutWindowComponent } from './components/atoms/donut-window/donut-window.component';
import { LineGraphComponent } from './components/atoms/line-graph/line-graph.component';

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
    SwitchComponent,
    HeaderComponent,
    DashboardComponent,
    CardListComponent,
    DataWindowComponent,
    BarWindowComponent,
    LineWindowComponent,
    ActivityWindowComponent,
    DonutWindowComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
