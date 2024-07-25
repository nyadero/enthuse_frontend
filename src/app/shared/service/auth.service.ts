import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private jwtHelper: JwtHelperService) {}

  login(token: string): void {
    // Save the token to local storage or a cookie
    localStorage.setItem('token', token.replaceAll(`"`, " "));
  }

  logout(): void {
    // Remove the token from local storage or a cookie
    localStorage.removeItem('token');
  }

  isAuthenticatedUser(): boolean {
    // Check if the token is present and not expired
    const token = localStorage.getItem('token');
     // Check if the token is present and not expired
    // return !this.jwtHelper.isTokenExpired(token);    
    return !!token;
  }
}
