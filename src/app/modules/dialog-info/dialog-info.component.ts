import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { EtudiantService } from 'src/app/etudiant.service';
import { DetailFormComponent } from '../detail-form/detail-form.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  public static etudiants :any;
  public myEtudiant:any;
  public static promotionDialog:any;
  public promotion:any;

  constructor(private prmotionService: PromotionService, private etudiantService: EtudiantService,private activatedRoute:ActivatedRoute, private router:Router,
    public dialogRef: MatDialogRef<DialogInfoComponent>){
    this.myEtudiant =DialogInfoComponent.etudiants;
   this.promotion=DialogInfoComponent.promotionDialog;
    console.log(this.myEtudiant);
  }
  ngOnInit() {
    
    
  }

  Afficheretudiant(noEtudiant){
    let etudiant : any;
  this.etudiantService.detail(noEtudiant).subscribe((data) => {
    etudiant = data;
    DetailFormComponent.etudiant = data;
    this.router.navigateByUrl("detail/"+noEtudiant);
    this.dialogRef.close();
  })
  }



  
  
}
