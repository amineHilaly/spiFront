import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QualificatifService } from '../qualificatif.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qualificatif-add',
  templateUrl: './qualificatif-add.component.html',
  styleUrls: ['./qualificatif-add.component.scss']
})
export class QualificatifAddComponent implements OnInit {

  
  myForm = new FormGroup({
    max:new FormControl(),
    min:new FormControl()
 });
  
  constructor(public qualificatifService:QualificatifService , private router: Router) { }

  ngOnInit() {
  
  }

  submit() : void{
    let body = {maximal: this.myForm.controls['max'].value,
    minimal:this.myForm.controls['min'].value  }
    this.qualificatifService.create(body).subscribe(
      (res: boolean) => {
        if (res) {
          this.router.navigateByUrl('/Qualificatif');
        } 
      }
    );
  }

}
