import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ChoiseComponent } from './choise/choise.component';
import { PrisonersComponent } from './prisoners/prisoners.component';
import { NewPrisonerComponent } from './new-prisoner/new-prisoner.component';
import { ModifyArtComponent } from './modify-art/modify-art.component';
import { GuardsComponent } from './guards/guards.component';
import { NewDossierComponent } from './new-dossier/new-dossier.component';
import { DossiersComponent } from './dossiers/dossiers.component';
import { NewGuardComponent } from './new-guard/new-guard.component';
import { ModifyGuardComponent } from './modify-guard/modify-guard.component';
import { ModifyDossierComponent } from './modify-dossier/modify-dossier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    ChoiseComponent,
    PrisonersComponent,
    NewPrisonerComponent,
    ModifyArtComponent,
    GuardsComponent,
    NewDossierComponent,
    DossiersComponent,
    NewGuardComponent,
    ModifyGuardComponent,
    ModifyDossierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
