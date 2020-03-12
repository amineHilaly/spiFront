import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  public static etudiants :any;
  public myEtudiant:any;

  constructor(private prmotionService: PromotionService, private activatedRoute:ActivatedRoute){
    this.myEtudiant =DialogInfoComponent.etudiants;
    console.log(this.myEtudiant);
  }
  ngOnInit() {
    
    
  }




  
  
}
