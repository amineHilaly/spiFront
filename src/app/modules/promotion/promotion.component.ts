import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

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

  ngOnInit() {

  }

}
