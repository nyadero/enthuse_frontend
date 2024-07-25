import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private httpClient: HttpClient) { }

  // follow user
  followUnfollowUser(userId: string): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/follow/${userId}`, null)
  }

  // follow/unfollow business
  followUnfollowBusiness(businessId: string): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/follow/business/${businessId}`, null);
  }

  // is user already followed
  isUserFollowed(userId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/follow/user-followed/${userId}`);
  }

  // check if business is already followed
  isBusinessFollowed(businessId:string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/follow/business-followed/${businessId}`);
  }
}
