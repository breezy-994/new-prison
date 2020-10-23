import { Component, OnInit } from '@angular/core';
import { ApiMsg } from '../prisoners/prisoners.component';
import { GuardsService } from '../services/data/guards.service';
import { Router } from '@angular/router';
import { Prisoner } from 'src/Model/PrisonerModel';
import { Guard } from 'src/Model/GuardModel';

/*
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

export class Guard{
  dossier:Dossier;
  constructor(
    public id:number,
    public nome:string,
    public cognome:string,
    public cf:string,
  ){}
}
*/

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  guards:Guard[];
  numGuards=0;
  apiMsg:ApiMsg;
  messaggio:string="";
  show:boolean;
  constructor(private route:Router,private guardService: GuardsService) { }

  ngOnInit(): void {
    this.show=false;
    this.guardService.getGuards().subscribe(
      response=>{
        this.guards=response;
        this.numGuards=this.guards.length;
      },
      error=>{
        this.show=true;
        console.log(error);
      }
    )
  }

  addGuard(){
    this.route.navigate(['newGuard']);
  }

  deleteGuard(id:Number){
    this.show=false;
    this.guardService.deleteGuard(id).subscribe(
      response=>{
        console.log("eliminato:");
        console.log(response);
        location.reload();
      },
      error=>{
        this.show=true;
        console.log(error);
      }
    )
  }

  modifyGuard(id:Number){
    console.log("modify guard");
    this.route.navigate(['modifyGuard',id]);
  }

  addDossier(id:number){
    this.route.navigate(['newDossier',id]);
  }
}
