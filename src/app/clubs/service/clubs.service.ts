import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private httpClient: HttpClient) { }

  // new club
  newclub(formData: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/clubs/new-club`, formData)
  }

  // club by id
  clubById(clubId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/${clubId}`);
  }

  // all clubs
  getclubs(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs`)
  }

  // user clubs
  userclubs(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/user-clubs`);
  }

  // delete club
  deleteclub(clubId: string): Observable<CustomHttpResponse>{
    return  this.httpClient.delete<CustomHttpResponse>(`${environment.api}/clubs/delete/${clubId}`)
  }

  // join club
  joinclub(clubId: string): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/clubs/join-club/${clubId}`, null);
  }

  // leave club
  leaveclub(clubId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/clubs/leave-club/${clubId}`);
  }

  // check if is member
  isclubMember(clubId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/is-member/${clubId}`);
  }

  // request to join
  // approve join requests
  // delete reported posts
  // remove club member

  // club posts
  clubPosts(clubId: string, pageNumber: number): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/posts/${clubId}?pageNumber=${pageNumber}`);
  }

  // club members
  clubMembers(clubId: string, pageNumber: number): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/members/${clubId}?pageNumber=${pageNumber}`);
  }

  // club events
  clubEvents(clubId: string, pageNumber: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/events/${clubId}?pageNumber=${pageNumber}`);
 }

  // club garage items
  clubGarageItems(clubId: string, pageNumber: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/garage-items/${clubId}?pageNumber=${pageNumber}`);
 }

  // search clubs
  searchclubs(query: string): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/clubs/search?query=${query}`);
  }
}
