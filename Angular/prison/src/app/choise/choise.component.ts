import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.css']
})
export class ChoiseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getPrisonersPage():void{
    this.router.navigate(['prisoners']);
  }
  getGuardsPage():void{
    this.router.navigate(['guards']);
  }
  getDossiersPage():void{
    this.router.navigate(['dossiers']);

  }
}
