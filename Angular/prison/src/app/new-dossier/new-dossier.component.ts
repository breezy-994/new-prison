import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'
import { Dossier } from 'src/Model/DossierModel';
import { Prisoner } from 'src/Model/PrisonerModel';
import { DossierService } from '../services/data/dossier.service';
import { PrisonersDataService } from '../services/data/prisoners-data.service';
@Component({
  selector: 'app-new-dossier',
  templateUrl: './new-dossier.component.html',
  styleUrls: ['./new-dossier.component.css']
})


export class NewDossierComponent implements OnInit {

  msg:string ='';
  cf:string;
  id:number;
  prisoner:Prisoner;
  newprisoner:Prisoner;
  idGuard:number;
  dossier:Dossier;
  show:boolean;
  constructor(private r:Router,private route:ActivatedRoute,private prisonerService:PrisonersDataService,private dossierService:DossierService) {
   }

  ngOnInit(): void {
    this.show=false;
    this.id=0;
    this.cf="";
    this.dossier=new Dossier(-1,"","","",null,null);
    this.prisoner=new Prisoner(-1,"","","");
    this.newprisoner=new Prisoner(null,"","","");
    this.idGuard=this.route.snapshot.params['id'];
  }

  ricercaPrisoner(){
    this.show=false;
    this.prisonerService.getPrisonersByCf(this.cf).subscribe(
      response=>{
          this.prisoner=response;
          this.id=this.prisoner.id;
          console.log(response);
    },error=>{
      this.show=true;
      console.log(error);
    }
    )
  }

  avantiPrisoner(){
    this.show=false;
    this.newprisoner.cf=this.cf;
    console.log("Invio");
    console.log(this.newprisoner);
    this.prisonerService.insertPrisoner(this.newprisoner).subscribe(
      response=>{ this.newprisoner=response;
        console.log(this.newprisoner);
        console.log(this.newprisoner)},
      error=>{
        this.show=true;
        console.log(error)
      }
        );
  }

  avanti(){
    console.log(this.prisoner)
  }
  aggiungi(){
    this.show=false;
      if (this.id==-1){
        // nel caso del nuovo prisoner
        this.dossierService.insertDossierWithIdGuard(this.idGuard,this.newprisoner.id,this.dossier).subscribe(
            response=>{this.dossier=response;console.log(this.dossier)},
            error=>{
            this.show=true;
              console.log(error)
            }
        )
      }
      if(this.id>=0){
        //nel caso del prisoner esistente
        this.dossierService.insertDossierWithIdGuard(this.idGuard,this.id,this.dossier).subscribe(
          response=>{this.dossier=response;console.log(this.dossier)},
          error=>{
            this.show=true;
            console.log(error)
          }
      )
      }

      this.r.navigate(["guards"]);
  }
}

