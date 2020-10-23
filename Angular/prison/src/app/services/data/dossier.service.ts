import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dossier } from 'src/Model/DossierModel';
//import {Prisoner} from 'src/app/prisoners/prisoners.component';
import { Prisoner } from 'src/Model/PrisonerModel';
@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private httpClient:HttpClient) { }
  getDossiers(){
    return this.httpClient.get<Dossier[]>('http://localhost:8092/dossier/allDossiers')
  }

  getDossiersByCrime(crime:String){
    return this.httpClient.get<Dossier[]>(`http://localhost:8092/dossier/ricercaPerCrimine?crimine=${crime}`)
  }
  getDossierByCfPrisoner(cf:String){
    return this.httpClient.get<Dossier[]>(`http://localhost:8092/dossier/ricercaPerPrisonerCf?cf=${cf}`)
  }

  deleteDossier(id:Number){
    return this.httpClient.delete<Dossier>(`http://localhost:8092/dossier/delete?id=${id}`)
  }

  insertDossier(dossier:Dossier){
    return this.httpClient.post<Dossier>('http://localhost:8092/dossier/inserisci',dossier)
  }

  updateDossier(dossier:Dossier){
    return this.httpClient.post<Dossier>('http://localhost:8092/dossier/update',dossier)
  }

  aggiungiPrisoner(id:number,prisoner:Prisoner){
    return this.httpClient.post<Dossier>(`http://localhost:8092/dossier/aggiungiPrisoner?id=${id}`,prisoner)
  }

  aggiungiPrisonerEsistente(Id_dossier:number,Id_prisoner:number){
    return this.httpClient.get<Dossier>(`http://localhost:8092/dossier/aggiungiPrisonerEsistente?id_dossier=${Id_dossier}&id_prisoner=${Id_prisoner}`);
  }

  insertDossierWithIdGuard(id_guard:number,id_prisoner:number,dossier:Dossier){
    return this.httpClient.post<Dossier>(`http://localhost:8092/dossier/aggiungiDossierWithIdGuardIdPrisoner?id_guard=${id_guard}&id_prisoner=${id_prisoner}`,dossier);
  }

  getDossierById(id:number){
    return this.httpClient.get<Dossier>(`http://localhost:8092/dossier/getDossierById?id=${id}`);
  }


}
