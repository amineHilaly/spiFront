import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { error } from 'highcharts';


export interface PeriodicElement {
 
  symbol: string;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {


  constructor(private promotionService: PromotionService) { }

  promotions : any = [];

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.promotionService.getAllPromotion()
      .subscribe((data) => {
        this.promotions = data;
        console.log(this.promotions);
      }, err => {
      });
  }

  delete(promotionPK){
    this.promotionService.deletePromotion(promotionPK).subscribe((res: boolean) => {
      if(res){
        this.getAll();
      }else{
        alert("seppression impossible");
      }
    });
  }

}
