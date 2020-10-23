import { Dossier } from './DossierModel';

export class Guard{
  dossier:Dossier;
  constructor(
    public id:number,
    public nome:string,
    public cognome:string,
    public cf:string,
  ){}
}
