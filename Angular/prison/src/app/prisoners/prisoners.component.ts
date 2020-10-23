import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrisonersDataService } from '../services/data/prisoners-data.service';
import { Prisoner } from 'src/Model/PrisonerModel';
/*
export class Prisoner{
  constructor(
    public id:number,
    public nome:string,
    public cognome:string,
    public cf:string
  ){
  }
}
*/
export class ApiMsg{

  constructor(
    public code:string,
    public message:string
  ){}
}

@Component({
  selector: 'app-prisoners',
  templateUrl: './prisoners.component.html',
  styleUrls: ['./prisoners.component.css']
})
export class PrisonersComponent implements OnInit {

  prisoners:Prisoner[];
  numPrisoners=0;
  apiMsg:ApiMsg;
  messaggio:string;
  show:boolean;
  constructor(private route:Router,private prisonerService: PrisonersDataService) { }

  ngOnInit(): void {
    this.show=false;
  this.prisonerService.getPrisoners().subscribe(
    response=>{
      this.prisoners=response;
      this.numPrisoners=this.prisoners.length;
    },
    error=>{
      this.show=true;
      console.log(error);
    }
  )
  }

  addPrisoner(){
    this.route.navigate(['newPrisoner']);
  }

  deletePrisoner(id:Number){
    console.log("delete prisoner");
    this.prisonerService.deletePrisoner(id).subscribe(
      response=>{
        console.log(response);
        location.reload();
      },
      error=>{
        this.show=true;
        //this.messaggio=error.error.messaggio;
        console.log(this.messaggio);
      }
    )
  }

  modifyPrisoner(id:Number){
    console.log("modify prisoner");
    this.route.navigate(['modifyPrisoner',id]);
  }

}
