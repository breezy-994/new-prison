import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guard } from 'src/Model/GuardModel';
import { GuardsService } from '../services/data/guards.service';

@Component({
  selector: 'app-modify-guard',
  templateUrl: './modify-guard.component.html',
  styleUrls: ['./modify-guard.component.css']
})
export class ModifyGuardComponent implements OnInit {
  Id:number;
  guard:Guard;
  messaggio:string;
  show:boolean;
  constructor(private r:Router,private guardsService:GuardsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show=false;
    this.Id=this.route.snapshot.params['id'];
    this.guardsService.getGuardById(this.Id).subscribe(
      response=>{
          this.guard=response;
          console.log(this.guard);
        },
      error=>{
          this.show=true;
          console.log(error);
      }

    );
  }

  modify():void{
    this.show=false;
    console.log(this.Id);
    this.guardsService.updateGuard(this.guard).subscribe(
      response=>{
        console.log('modify');
        console.log(response);
        this.r.navigate(['guards']);
      },
      error=>{
        this.show=true;
        this.messaggio=error.error.messaggio;
        console.log(this.messaggio);
      }
    );

  }
}
