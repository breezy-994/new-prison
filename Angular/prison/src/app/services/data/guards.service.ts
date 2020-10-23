import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dossier } from 'src/Model/DossierModel';
import { Guard } from 'src/Model/GuardModel';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor(private httpClient:HttpClient) { }

  getGuards(){
    return this.httpClient.get<Guard[]>('http://localhost:8092/guard/allGuards');
  }

  insertDossier(id:number,dossier:Dossier){
    return this.httpClient.post<Dossier>(`http://localhost:8092/guard/aggiungiDossier?id=${id}`, dossier);
  }

  insertGuard(guard:Guard){
    return this.httpClient.post<Guard>('http://localhost:8092/guard/inserisci',guard)
  }


  deleteGuard(id:Number){
    return this.httpClient.delete<Guard>(`http://localhost:8092/guard/delete/?id=${id}`);
  }

  updateGuard(guard:Guard){
    return this.httpClient.post<Guard>('http://localhost:8092/guard/update',guard);
  }

  getGuardById(id:number){
    return this.httpClient.get<Guard>(`http://localhost:8092/guard/getGuardById?id=${id}`);
  }
}
