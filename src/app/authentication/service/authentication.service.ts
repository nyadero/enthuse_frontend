import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userRoles: string[] = []; // Populate this with user roles during login
  private userPermissions: string[] = []; // Populate this with user permissions during login


  constructor(
    private httpClient: HttpClient
  ) { }


  // register user
  registerUser(user: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auth/signup`, user);
  }

  // verify registration


  // resend verification token

  // sign in
  loginUser(user: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auth/signin`, user);
  }

  // forgot password
  forgotPassword(forgotPassword: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auth/forgot-password`, forgotPassword);
  }

  // reset password
  resetPassword(resetPassword: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/auth/register`, resetPassword);
  }

  // update password
  updatePassword(updatePassword: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/auth/update-password`, updatePassword);
  }

  // delete account
  deleteAccount(): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/auth/delete-account`);
  }


  login(token: string): void {
    // Save the token to local storage or a cookie
    localStorage.setItem('token', token.replaceAll(`"`, " "));
  }
  
  logoutUser() {
    this.httpClient.post(`${environment.api}/logout`, null);
    localStorage.removeItem("enthuze_user");
    localStorage.removeItem('token');
  }
 

  isAuthenticated(): boolean {
    // Check if the token is present and not expired
    const token = localStorage.getItem('token');
     // Check if the token is present and not expired
    // return !this.jwtHelper.isTokenExpired(token);    
    return true;
  }


  getRoles(): string[] {
    return this.userRoles;
  }

  getPermissions(): string[] {
    return this.userPermissions;
  }

  setRoles(role: string){
    this.userRoles.push(role);
  }


  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }


}

