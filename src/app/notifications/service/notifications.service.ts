import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

   constructor(private httpClient: HttpClient) { }

  // get user chats
  getUserNotifications():Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/notifications/user-notifications`);
  }

}
