import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Rating } from '../interface/rating';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private httpClient: HttpClient) { }

  // new business rating
  newBusinessRating(businessId:string, rating: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/rating/new/${businessId}`, rating);
  }

   // all business reviews and ratings
  businessReviews(businessId: string): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/rating/${businessId}`);
  }

  // edit rating
  editRating(ratingId: string, rating: Rating): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/rating/update/${ratingId}`, rating);
  }

  // delete rating
  deleteRating(ratingId:string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/rating/delete/${ratingId}`)
  }

}
