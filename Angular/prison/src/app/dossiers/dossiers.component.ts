import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
//import { Dossier } from '../guards/guards.component';
import { DossierService } from '../services/data/dossier.service';
import { Router } from '@angular/router';
import { Dossier } from 'src/Model/DossierModel';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})
export class DossiersComponent implements OnInit {
  dossiers:Dossier[];
  numDossiers:Number;
  cfPrisoner:string="";
  crimine:String="";
  show:boolean;
  msg:string="";
  constructor(private route:Router,private dossierService: DossierService) { }

  ngOnInit(): void {
    this.show=false;
    this.dossierService.getDossiers().subscribe(
      response=>{
        this.dossiers=response;
        this.numDossiers=this.dossiers.length;
      },
      error=>{
        this.show=true;
        console.log(error);
      }
    )
  }

  RicercaPerCrimine(): void{
    this.show=false;
    this.dossierService.getDossiersByCrime(this.crimine).subscribe(
      response=>{
        this.dossiers=response;
      },
      error=>{
        this.msg=error.error.message;
        console.log(this.msg);
        this.show=true;
      }
    );
    this.crimine="";
  }
  allDossiers():void{
    this.show=false;
    this.dossierService.getDossiers().subscribe(
      response=>{
        this.dossiers=response;
        this.numDossiers=this.dossiers.length;
      },
      error=>{
        console.log(error);
        this.show=true;
      }
    )
  }

  RicercaPerCfPrisoner():void{
    this.show=false;
    this.dossierService.getDossierByCfPrisoner(this.cfPrisoner).subscribe(
      response=>{
        this.dossiers=response;
      },
      error=>{
        console.log(error);
        this.show=true;

      }
    )
    this.cfPrisoner="";
  }

  deleteDossier(id:Number):void{
    this.show=false;
    this.dossierService.deleteDossier(id).subscribe(
      response=>{
        console.log(response);
        location.reload();
      },
      error=>{
        console.log(error);
        this.show=true;
      }
    )
  }

  ModifyDossier(id:Number){
    this.route.navigate(['modifyDossier',id]);
  }
/*
  addDossier():void{
    this.route.navigate(['newDossier1']);
  }
*/
  addPrisoner(id: number){
    this.route.navigate(['addPrisonerByDossier',id]);
  }
  addPrisonerExist(id: number){
    this.route.navigate(['addPrisonerExistByDossier',id]);
  }

}
