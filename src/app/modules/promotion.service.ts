import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllPromotion(){
    return this.http.get(this.host+"/promotions");
  }

}

