import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private httpClient: HttpClient,) { }

   // upload avatar
  uploadAvatar(avatar: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/users/upload-avatar`, avatar);
  }
  
  // upload cover image
  uploadCoverpic(coverPic: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/users/upload-coverpic`, coverPic);
  }

  // add about
  // edit profile info
  updateUserInfo(userInfo: any): Observable<CustomHttpResponse>{
     return this.httpClient.put<CustomHttpResponse>(`${environment.api}/users/update-profile`, userInfo);
  }

    // fetch user
  fetchUser(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/users/fetch-user`);
  }

  // all users
  allUsers(): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/users/users`);
  }

  // fetch profile
  fetchProfile(userId:string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/users/${userId}`);
  }

  // search users
  searchUsers(query: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/users/search?query=${query}`);
  }
  
}
