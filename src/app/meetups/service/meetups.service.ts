import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor(
     private httpClient: HttpClient
  ) { }

  // add meetup
  newMeetup(meetup: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/meetups`, meetup);
  }

  // edit meetup
  updateMeetup(meetupId: string, meetup: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/meetups/${meetupId}`, meetup);
  }

  // all meetups
  allMeetups(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/meetups`);
  }

  // meetup by id
  meetupById(meetupId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/meetups/${meetupId}`);
  }

  // delete meetup
  deleteMeetup(meetupId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/meetups/${meetupId}`);
  }

  // search meetups
}
