import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QualificatifService } from '../qualificatif.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-qualificatif-update',
  templateUrl: './qualificatif-update.component.html',
  styleUrls: ['./qualificatif-update.component.scss']
})
export class QualificatifUpdateComponent implements OnInit {


  public qualificatif = { max: 'aa', min: 'bb' };

  myForm: FormGroup;



  constructor(public qualificatifService: QualificatifService,
    private _Activatedroute: ActivatedRoute,
    private router: Router) {
    this.qualificatif['max'] = this._Activatedroute.snapshot.paramMap.get("max");
    this.qualificatif['min'] = this._Activatedroute.snapshot.paramMap.get("min");
    this.myForm = new FormGroup({
      max: new FormControl(this.qualificatif['max']),
      min: new FormControl(this.qualificatif['min'])
    });

  }

  ngOnInit() {

  }

  submit(): void {
    let body = {
      idQualificatif: this._Activatedroute.snapshot.paramMap.get("id"),
      maximal: this.myForm.controls['max'].value,
      minimal: this.myForm.controls['min'].value
    }
    this.qualificatifService.update(body).subscribe(
      (res: boolean) => {
        if (res) {
          this.router.navigateByUrl('/Qualificatif');
        } else {
          alert("mise a jour impossible"+res);
        }
      }
    );
  }

}
