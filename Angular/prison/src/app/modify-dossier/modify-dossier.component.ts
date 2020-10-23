import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/Model/DossierModel';
import { DossierService } from '../services/data/dossier.service';


@Component({
  selector: 'app-modify-dossier',
  templateUrl: './modify-dossier.component.html',
  styleUrls: ['./modify-dossier.component.css']
})
export class ModifyDossierComponent implements OnInit {

  Id:number;
  dossier:Dossier;
  messaggio:string;
  show:boolean;

  constructor(private r:Router,private dossiersService:DossierService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show=false;
    this.Id=this.route.snapshot.params['id'];
    this.dossiersService.getDossierById(this.Id).subscribe(
      response=>{
          this.dossier=response;
          console.log(this.dossier);
      },
      error=>{
        this.show=true;
          console.log(error);
      }

    );
  }

  modify():void{
    this.show=false;
    this.dossiersService.updateDossier(this.dossier).subscribe(
      response=>{
        console.log('modify');
        console.log(response);
        this.r.navigate(['dossiers']);
      },
      error=>{
        this.show=true;
        this.messaggio=error.error.messaggio;
        console.log(this.messaggio);
      }
    );

  }

}
