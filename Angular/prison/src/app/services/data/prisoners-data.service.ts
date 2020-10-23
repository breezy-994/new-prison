import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//import { Prisoner } from 'src/app/prisoners/prisoners.component';
import { Prisoner } from 'src/Model/PrisonerModel';
@Injectable({
  providedIn: 'root'
})
export class PrisonersDataService {

  constructor(private httpClient:HttpClient) { }

  getPrisoners(){
    return this.httpClient.get<Prisoner[]>('http://localhost:8092/prisoners/allPrisoners');
  }

  deletePrisoner(id:Number){
    return this.httpClient.delete<Prisoner>(`http://localhost:8092/prisoners/delete?id=${id}`);
  }
//modifyPrisoner
  updatePrisoner(prisoner:Prisoner) {
    return this.httpClient.post<Prisoner>(`http://localhost:8092/prisoners/update`, prisoner);
    }
/*
  insertPrisoner(nome:string, cognome:string, cf:string) {
    return this.httpClient.get<ApiMsg>(`http://localhost:8092/prisoners/addPrisoner/${nome}-${cognome}-${cf}`);
    }
*/
insertPrisoner(prisoner:Prisoner) {
  return this.httpClient.post<Prisoner>(`http://localhost:8092/prisoners/inserisci`, prisoner);
  }

  getPrisonersByCf(cf:string){
    return this.httpClient.get<Prisoner>(`http://localhost:8092/prisoners/getPrisonerByCf?cf=${cf}`);
  }

  getPrisonerById(id:number){
    return this.httpClient.get<Prisoner>(`http://localhost:8092/prisoners/getPrisonerById?id=${id}`);
  }
}
