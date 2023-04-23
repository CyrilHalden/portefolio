import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cv/cv.component";
import {EntrepriseComponent} from "./Stage/entreprise/entreprise.component";
import {MissionStageComponent} from "./Stage/mission-stage/mission-stage.component";
import {FirstMissionComponent} from "./all-mission/first-mission/first-mission.component";
import {SecondMissionComponent} from "./all-mission/second-mission/second-mission.component";
import {VeilleTechnologiqueComponent} from "./Dév professionnel/veille-technologique/veille-technologique.component";
import {ProjetProComponent} from "./Dév professionnel/projet-pro/projet-pro.component";
import {Mission2StageComponent} from "./Stage/mission2-stage/mission2-stage.component";


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cv', component: CvComponent},
  { path: 'mission1', component: FirstMissionComponent},
  { path: 'mission2', component: SecondMissionComponent},
  { path: 'entreprise', component: EntrepriseComponent},
  { path: 'missionStage', component: MissionStageComponent},
  { path: 'mission2Stage', component: Mission2StageComponent},
  { path: 'veille-technologique', component: VeilleTechnologiqueComponent},
  { path: 'projet', component: ProjetProComponent},


  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
