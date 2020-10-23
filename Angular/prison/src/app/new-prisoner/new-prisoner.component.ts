import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMsg } from '../prisoners/prisoners.component';
import { PrisonersDataService } from '../services/data/prisoners-data.service';
import { Prisoner } from 'src/Model/PrisonerModel';

@Component({
  selector: 'app-new-prisoner',
  templateUrl: './new-prisoner.component.html',
  styleUrls: ['./new-prisoner.component.css']
})

export class NewPrisonerComponent implements OnInit {
  prisoner : Prisoner;
  apiMsg:ApiMsg;
  messaggio:string;
  show:boolean;
  constructor(private prisonerService:PrisonersDataService,private router:Router) { }
  ngOnInit(): void {
    this.show=false;
    this.prisoner=new Prisoner(-1,"","","");
  }

  newPrisoner(){
    this.show=false;
    console.log(name);
    this.prisonerService.insertPrisoner(this.prisoner).subscribe(
      response=>{
        console.log(response)
        this.router.navigate(['prisoners']);
      },
      error=>{
        this.show=true;
        //this.messaggio=error.error.messaggio;
        //console.log(this.messaggio);
        console.log(error);
      }
    )

  }

}
