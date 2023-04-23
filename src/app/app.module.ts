import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterOutlet} from "@angular/router";
import { SideBarreComponent } from './side-barre/side-barre.component';
import { CvComponent } from './cv/cv.component';
import { EntrepriseComponent } from './Stage/entreprise/entreprise.component';
import { MissionStageComponent } from './Stage/mission-stage/mission-stage.component';
import { FirstMissionComponent } from './all-mission/first-mission/first-mission.component';
import { SecondMissionComponent } from './all-mission/second-mission/second-mission.component';
import { VeilleTechnologiqueComponent } from './Dév professionnel/veille-technologique/veille-technologique.component';
import { ProjetProComponent } from './Dév professionnel/projet-pro/projet-pro.component';
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { Mission2StageComponent } from './Stage/mission2-stage/mission2-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarreComponent,
    CvComponent,
    EntrepriseComponent,
    MissionStageComponent,
    FirstMissionComponent,
    SecondMissionComponent,
    VeilleTechnologiqueComponent,
    ProjetProComponent,
    FooterComponent,
    Mission2StageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NgOptimizedImage,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
