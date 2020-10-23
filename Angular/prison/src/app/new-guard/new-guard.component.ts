import { Component, OnInit } from '@angular/core';
import { Guard } from 'src/Model/GuardModel';
import { GuardsService } from '../services/data/guards.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-new-guard',
  templateUrl: './new-guard.component.html',
  styleUrls: ['./new-guard.component.css']
})

export class NewGuardComponent implements OnInit {

  guard : Guard;
  messaggio:string;
  show:boolean;
  constructor(private r:Router,private guardService:GuardsService) { }

  ngOnInit(): void {
    this.show=false;
    this.guard=new Guard(null,"","","");
  }

  newGuard(){
    console.log(name);
    this.guardService.insertGuard(this.guard).subscribe(
      response=>{
        this.guard=response;
        this.r.navigate(['guards']);
      },
      error=>{
        this.show=true;
        console.log(error);
        // this.messaggio=error.error.messaggio;
        //console.log(this.messaggio);
      }
    );
  }
}
