import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './qualificatif.component.html',
  styleUrls: ['./qualificatif.component.scss']
})
export class QualificatifComponent implements OnInit {


  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new ExampleDataSource();

  cellClicked(element) {
    console.log(element.name + ' cell clicked');
  }

  constructor() { }

  ngOnInit() {

  }

}

export interface Element {
  id: number;
  max: string;
  min: string;
  symbol: string;
}
