import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllPromotion(){
    return this.http.get(this.host+"/promotions");
  }


  deletePromotion(promotionPK): Observable<any> {
    console.log(promotionPK);
    
    
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
      };
      var requestoptions = new RequestOptions({
        method: RequestMethod.Post,
        url: this.apiURL + url,
        headers: headers,
        body: JSON.stringify(data)
    })

    return this.http.delete(this.host+"/Deletepromotion",promotionPK);
  }
}

