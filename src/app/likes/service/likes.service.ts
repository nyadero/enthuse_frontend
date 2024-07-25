import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private httpClient: HttpClient) { }

  // like post
  likePost(postId: string): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/like/post/${postId}`, null);
  }

  // check if post has been liked
  isPostLiked(postId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/like/post-liked/${postId}`);
  }

  // like garage item
  likeGarage(garageId: string):Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/like/garage/${garageId}`, null);
  }

  //  check if garage has been liked
  isGarageLiked(garageId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/like/garage-liked/${garageId}`);
  }


}
