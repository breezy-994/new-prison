import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiseComponent } from './choise/choise.component';
import {NewPrisonerComponent} from './new-prisoner/new-prisoner.component';
import  {DossiersComponent} from './dossiers/dossiers.component';
import { PrisonersComponent } from './prisoners/prisoners.component';
import {GuardsComponent } from './guards/guards.component';
import {ModifyArtComponent} from './modify-art/modify-art.component';
import { NewGuardComponent } from './new-guard/new-guard.component';
import { ModifyGuardComponent } from './modify-guard/modify-guard.component';
import { ModifyDossierComponent } from './modify-dossier/modify-dossier.component';
import { NewDossierComponent } from './new-dossier/new-dossier.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:ChoiseComponent},
  {path:'prisoners',component:PrisonersComponent},
  {path:'guards',component:GuardsComponent},
  {path:'dossiers',component:DossiersComponent},
  {path:'newDossier/:id',component:NewDossierComponent},
  {path:'newPrisoner',component:NewPrisonerComponent},
  {path: 'newGuard',component:NewGuardComponent},
  {path: 'modifyDossier/:id',component:ModifyDossierComponent},
  {path:'modifyPrisoner/:id',component:ModifyArtComponent},
  {path:'modifyGuard/:id',component:ModifyGuardComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
