import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { CustomHttpResponse } from '../shared/interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient ) { }

   // make an inquiry on a listing
  inquireListing(listingId: string, inquiry: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/comments/listing/${listingId}`, inquiry);
  }

  // comment on a garage item
  newGarageItemComment(garageId: string, inquiry: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/comments/comment-garage/${garageId}`, inquiry);
  }

  // comment on a post
  newPostComment(postId: string, inquiry: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/comments/comment-post/${postId}`, inquiry);
  }

  // all inquiries made for a listing
  allListingInquiries(listingId: string): Observable<CustomHttpResponse> {
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/comments/listing-comments/${listingId}`);
  }

  // all comments made for a garage item
  allGarageItemComments(garageId: string): Observable<CustomHttpResponse> {
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/comments/garage-comments/${garageId}`);
  }

  // all comments made for a post
  allPostComments(postId: string): Observable<CustomHttpResponse> {
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/comments/post-comments/${postId}`);
  }


  // reply to a comment
  replyToComment(commentId: string, inquiry: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/comments/reply-comment/${commentId}`, inquiry);
  }

  // delete an inquiry
  deleteInquiry(inquiryId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/comments/delete/${inquiryId}`);
  }

  // update inquiry
  updateInquiry(inquiryId: string, inquiry: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/comments/edit/${inquiryId}`, inquiry);
  }

  // get all replies for a given inquiry
  inquiryReplies(inquiryId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/comments/replies/${inquiryId}`);
  }
}
