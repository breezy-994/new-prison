import { Guard } from './GuardModel';
import { Prisoner } from './PrisonerModel';

export class Dossier{
  constructor(
    public id:number,
    public dataCarcerazione:string,
    public dataScarcerazione:string,
    public crimine:string,
    public prisoner:Prisoner,
    public guard:Guard
    ){
  }
}
