import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { AuthService } from './auth.service';
import { UserInterface } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  user!: UserInterface;

  constructor(private localStorageService: LocalstorageService, private authService: AuthService) {
    this.user = this.localStorageService.getItem();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // return this.authenticationService.loggedIn$.pipe(
    //   take(1),
    //   switchMap((loggedIn: boolean) => {
    //     console.log({loggedIn});
    //     const token = this.user?.jwtToken;
    //     console.log({ token });
    //     if (token) {
    //       const cloned = req.clone({
    //         setHeaders: {
    //           Authorization: `Bearer ${token.replaceAll(`"`, " ")}`,
    //         },
    //       });
    //       return next.handle(cloned);
    //     }
    //     return next.handle(req);
    //   })
    // )

    console.log("IsAuthenticated " + this.authService.isAuthenticatedUser());
    

    if(this.authService.isAuthenticatedUser()){
       // Add authentication token to the request headers
      const token = localStorage.getItem("token");
      console.log(token?.replaceAll(`"`, ""));
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token?.replaceAll(`"`, "")}`,
        },
      });
    }
    return next.handle(request);
    }

  }

