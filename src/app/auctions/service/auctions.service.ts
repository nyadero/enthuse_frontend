import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {
 
  constructor(private httpClient: HttpClient) { }

  // fetch all auctions
  fetchAllAuctions(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>("http://127.0.0.1:8080/api/v1/auctions");
  }

  // fetch auction by id
  getAuction(auctionId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/auctions/${auctionId}`);
  }

  // submit auction
  submitAuction(auction: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auctions/vehicle`, auction);
  }

  submitMotorbikeAuction(formData: FormData) : Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auctions/motorbike`, formData);
  }

  
}
