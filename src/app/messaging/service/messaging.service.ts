import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';
// import { SocketClientService } from 'src/app/service/socket-client.service';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
 

  constructor(private httpClient: HttpClient) { }

  // get user chats
  getUserChats():Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/messaging/user-chats`);
  }

  // get all users
  getUsers(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/follow/users`);
  }

  // new chat
  newChat(newChat: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/messaging/new-chat`, newChat);
  }

  getChatMessages(chatId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/messaging/${chatId}`);
  }

  // new message
  newMessage(chatId:string, message: any): Observable<CustomHttpResponse>{
   return this.httpClient.post<CustomHttpResponse>(`${environment.api}/messaging/new-message/${chatId}`, message) 
  }

}
