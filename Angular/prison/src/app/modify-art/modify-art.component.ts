import { Component, OnInit } from '@angular/core';
import { ApiMsg } from '../prisoners/prisoners.component';
import { ActivatedRoute,Router} from '@angular/router';
import { PrisonersDataService } from '../services/data/prisoners-data.service';
import { Prisoner } from 'src/Model/PrisonerModel';


@Component({
  selector: 'app-modify-art',
  templateUrl: './modify-art.component.html',
  styleUrls: ['./modify-art.component.css']
})
export class ModifyArtComponent implements OnInit {
  Id:number;
  prisoner:Prisoner;
//  apiMsg:ApiMsg;
  messaggio:string;
  show:boolean;
  constructor(private router:Router,private prisonersDataServie:PrisonersDataService, private route: ActivatedRoute ) {
   }

  ngOnInit(): void {
    this.show=false;
    this.Id=this.route.snapshot.params['id'];
    this.prisonersDataServie.getPrisonerById(this.Id).subscribe(
      response=>{
          this.prisoner=response;
          console.log(this.prisoner);
      },
      error=>{
          this.show=true;
          console.log(error);
      }

    );
  }

  modify(){
    this.show=false;
    console.log(this.Id);
    this.prisonersDataServie.updatePrisoner(this.prisoner).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['prisoners']);
      },
      error=>{
        this.show=true;
        this.messaggio=error.error.messaggio;
        console.log(this.messaggio);
      }
    );
  }


}
