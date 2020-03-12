import { Component, OnInit } from '@angular/core';
import { QualificatifService } from '../qualificatif.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { QualificatifUpdateComponent } from '../qualificatif-update/qualificatif-update.component';



@Component({
  selector: 'app-posts',
  templateUrl: './qualificatif.component.html',
  styleUrls: ['./qualificatif.component.scss']
})
export class QualificatifComponent implements OnInit {


  qualificatifs:any = [];

  constructor(public qualificatifService:QualificatifService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getQualificatifs();
  }

  getQualificatifs() {
    this.qualificatifs = [];
    this.qualificatifService.getAll().subscribe((data: {}) => {
      this.qualificatifs = data;
    });
  }

  delete(id) : void {
    let response;
    this.qualificatifService.delete(id).subscribe((res: boolean) => {
      if(res){
        this.getQualificatifs();
      }else{
        alert("suppression impossible");
      }
    });
  }


  update(qualificatif) : void {
    this.router.navigateByUrl('/Qualificatif/update/'+qualificatif['idQualificatif']+'/'+qualificatif['minimal']+'/'+qualificatif['maximal']);
  }
}